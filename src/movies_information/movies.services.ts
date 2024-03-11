import { InjectModel } from '@nestjs/mongoose';
import { Movies, MoviesDocument } from './movies.entity';
import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Model } from 'mongoose';
import { UserService } from 'src/user_information/user.service';
import { ReviewsService } from './reviews/reviews.service';

@Injectable()
export class MoviesServices {
  constructor(
    @InjectModel(Movies.name)
    private readonly moviesModel: Model<MoviesDocument>,
    private readonly reviewService: ReviewsService,
  ) {}

  // ============================ PUBLIC API ============================
  async addSomeMovies(movies: any): Promise<any> {
    try {
      return this.moviesModel.insertMany(movies);
    } catch (error) {
      throw new BadRequestException('Movies Not Added');
    }
  }

  async getAllMovies(): Promise<any> {
    try {
      return await this.moviesModel.aggregate([{ $sample: { size: 100 } }]);
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  async getMovieById(movie_id: string): Promise<any> {
    try {
      return await this.moviesModel.findById(movie_id);
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  async searchMovie(query: any): Promise<any> {
    try {
      console.log(query);
      const {
        serch,
        movie_language,
        movie_catagory,
        movie_year,
        movie_time_duration,
        movie_rating,
        page,
        user_limit,
      } = query;
      const limit = user_limit || 3;
      const skip = (page - 1) * limit || 0;
      const findObject = {
        ...(serch && {
          movie_title: new RegExp(serch, 'i'),
        }),
        ...(movie_language && { movie_language }),
        ...(movie_catagory && { movie_catagory }),
        ...(movie_year && { movie_year }),
        ...(movie_time_duration && { movie_time_duration }),
        ...(movie_rating && { movie_rating }),
      };
      const total_number_of_movies = await this.moviesModel.countDocuments();
      let findedMovies = await this.moviesModel
        .find(findObject)
        .skip(skip)
        .limit(limit);

      let total_page = Math.ceil(findedMovies.length / limit);
      if (
        findedMovies.length === 0 &&
        parseInt(page) <= (total_page === 0 ? 1 : total_page)
      ) {
        findedMovies = await this.moviesModel.aggregate([
          { $sample: { size: limit } },
        ]);
        total_page = Math.ceil(total_number_of_movies / limit);
      }
      return {
        findedMovies,
        current_page: parseInt(page) || 1,
        total_page: total_page || Math.ceil(findedMovies.length / limit),
        number_of_movies: findedMovies.length,
        total_number_of_movies,
      };
    } catch (error) {
      throw new NotFoundException('Movie Not Found');
    }
  }

  // ============================ PRIVATE API ============================
  async createReviews(user: any, movie_id: string, user_reviews: any) {
    try {
      // First We check is the user selected movie is present or not
      const movie = await this.moviesModel
        .findById(movie_id)
        .populate('movie_reviews');
      // If the movie is present then check the user already reviewed the movie or not
      if (movie) {
        // Here we find the user is already reviewed the movie or not
        const isAlreadyReviewed = (movie.movie_reviews as any).find(
          (review) => review.user_id.toString() === user._id.toString(),
        );
        // If the user already reviewed the movie then throw the error
        if (isAlreadyReviewed) {
          throw new BadRequestException('You have already reviewed this movie');
        }

        // If the user not reviewed the movie then create the review
        const create_review = await this.reviewService.createReviesOfMovie(
          user,
          movie_id,
          user_reviews,
        );

        // add the movies in the movie_review array in add the review id
        (movie.movie_reviews as any).push(create_review._id);

        // Count the total number of reviews
        movie.movie_number_of_reviews = movie.movie_reviews.length;

        // Calculate the average rating of the movies based on the number of reviews
        const totalRating = ((movie.movie_reviews + 1) as any).reduce(
          (sum, review) =>
            review.movie_rating === undefined
              ? sum + create_review.movie_rating
              : sum + review.movie_rating,
          0,
        );
        movie.movie_rating = totalRating / movie.movie_reviews.length;

        // update the movie
        await this.moviesModel.updateOne({ _id: movie_id }, movie);

        // send the response
        return 'Your review is added successfully.';
      } else {
        throw new NotFoundException('Movie Not Found');
      }
    } catch (error) {
      return error;
    }
  }

  // ============================ ADMIN API ============================

  // // This method return all movies
  // // This method find all movies availabe on the our database
  // // This method end point is ....
  // // @Get("/api/movies")
  // async getAllMovies(): Promise<any> {
  //   try {
  //     return await this.moviesModel.find();
  //   } catch (error) {
  //     throw new NotFoundException(error);
  //   }
  // }

  // // This method create a new movie in the database
  // // return the string if movie is created successfully else throw the error
  // // This method end point is .....
  // // @Post("/api/movies")
  // async createMovie(user_id: String, movie: Movies): Promise<any> {
  //   try {
  //     const isMoviesExist = await this.moviesModel.findOne({
  //       movie_title: movie.movie_title,
  //     });
  //     if (isMoviesExist) {
  //       throw new BadRequestException('Movie Already Exist');
  //     }
  //     const movieCreated = new this.moviesModel({
  //       ...movie,
  //       user_id,
  //     });
  //     await movieCreated.save();
  //     return { status: 201, message: 'movie created successfully' };
  //   } catch (error) {
  //     throw new NotFoundException(error);
  //   }
  // }

  // // This method return a movie based on id
  // // This method return the string else error
  // // This method end point is ....
  // // @Get("/api/movies/:id")
  // async updateMovie(movie_id: string) {
  //   try {
  //     const movie = await this.userService.findOne(movie_id);
  //     if (!movie) {
  //       throw new NotFoundException('movie not found');
  //     } // if movie not found then throw the error
  //     await this.moviesModel.findByIdAndUpdate(movie_id, movie); //update movie if found
  //     return { status: 200, message: 'movie updated successfully' };
  //   } catch (error) {
  //     throw new NotFoundException(error);
  //   }
  // }

  // // This method delete a movie based on id
  // // In this movie id get from it token so user must need to login to delete it
  // // This method end point is ....
  // // @Delete("/api/movies/:id")
  // async deleteMovie(email: string, movie_id: string): Promise<any> {
  //   try {
  //     const currentUser = await this.userService.findUserByEmail(email);
  //     const movie = await this.userService.findOne(movie_id);
  //     if (!movie) {
  //       throw new NotFoundException('movie not found');
  //     }
  //     await this.moviesModel.findByIdAndDelete(movie_id);
  //     return { status: 200, message: 'movie deleted successfully' };
  //   } catch (error) {
  //     throw new NotFoundException(error);
  //   }
  // }

  // async searchMovie(user_query: any): Promise<any> {
  //   try {
  //     const {
  //       movie_catagory,
  //       movie_title,
  //       movie_language,
  //       movie_rating,
  //       movie_year,
  //       search,
  //     } = user_query;
  //     const limit = user_query.limit || 3; // This limit variable is used for pagination to view given limit movies
  //     const skip = (user_query.page - 1 || 1) * limit; // This skip variable is used for pagination to view given skip movies
  //     const findQuery = {
  //       ...(movie_catagory && {
  //         movie_catagory: `[a-zA-Z0-9@#!.<> ]?${movie_catagory}[a-zA-Z0-9@#!.<> ]?`,
  //       }),
  //       ...(movie_title && {
  //         movie_title: `[a-zA-Z0-9@#!.<> ]?${movie_title}[a-zA-Z0-9@#!.<> ]?`,
  //       }),
  //       ...(movie_language && {
  //         movie_language: `[a-zA-Z0-9@#!.<> ]?${movie_language}[a-zA-Z0-9@#!.<> ]?`,
  //       }),
  //       ...(movie_rating && { movie_rating }),
  //       ...(movie_year && { movie_year }),
  //       ...(search && {
  //         movie_title: {
  //           $regex: `[a-zA-Z0-9@#!.<> ]?${search}[a-zA-Z0-9@#!.<> ]?`,
  //           $options: 'i',
  //         },
  //       }),
  //     }; // This query is used for search to which parameter to search in the given movies database
  //     let movies = await this.moviesModel
  //       .find(findQuery)
  //       .skip(skip)
  //       .limit(limit); // This method is used to find the movies based on the query
  //     if (!movies.length) {
  //       movies = await this.moviesModel.aggregate([
  //         { $sample: { size: limit } },
  //       ]);
  //     }
  //     return movies;
  //   } catch (error) {
  //     throw new NotFoundException(error);
  //   }
  // }

  // async createReview(email: string, movie_id: string): Promise<any> {}
}

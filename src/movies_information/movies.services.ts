import { InjectModel } from '@nestjs/mongoose';
import { Movies, MoviesDocument } from './movies.entity';
import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Model } from 'mongoose';
import { ReviewsService } from './reviews/reviews.service';

@Injectable()
export class MoviesServices {
  constructor(
    @InjectModel(Movies.name)
    private readonly moviesModel: Model<MoviesDocument>,
    private readonly reviewService: ReviewsService,
  ) {}

  // ============================ PUBLIC API ============================

  // This method used to add some movies
  // This method end point is ....
  // @Post('/api/movies')
  async addSomeMovies(movies: any): Promise<any> {
    try {
      return this.moviesModel.insertMany(movies);
    } catch (error) {
      throw new BadRequestException('Movies Not Added');
    }
  }

  // This method used to get all movies
  // In this method we will use the mongoose inbuilt method find through get all movies
  // This method end point is ....
  // @Get('/api/movies')
  async getAllMovies(): Promise<any> {
    try {
      return await this.moviesModel.aggregate([{ $sample: { size: 100 } }]);
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  // This method used to get a movie based on id
  // This method into the database inbuilt mehtod findById through get movie
  // This method is take a movie id as parameter
  // This method end point is ....
  // @Get('/api/movie/:id')
  async getMovieById(movie_id: string): Promise<any> {
    try {
      return await this.moviesModel.findById(movie_id);
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  // This method used to search movie
  // This method take a query object and pass as parameter on find based on query
  // This method end point is .....
  // @Get('/api/user/search')
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

  // This method is used to create the review of movie
  // This method take a three parameter user, movie_id and user_reviews
  // This method end point is .....,
  // @Post('/api/user/reviews')
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

  // This method used to create a movie
  // This method end point is ....
  // @Post('/api/admin/movies')
  async createMovie(user_id: String, movie: Movies): Promise<any> {
    try {
      const isMoviesExist = await this.moviesModel
        .findOne({
          movie_title: movie.movie_title,
        })
        .exec();
      if (isMoviesExist) {
        throw new BadRequestException('Movie Already Exist');
      }
      const createMovie = new this.moviesModel({ movie, ...user_id });
      return await createMovie.save();
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  // This method used to update a movie
  // This method end point is ....
  // @Put('/api/admin/movies/:id')
  async updateMovie(id: string, movie_id: string, data: any): Promise<any> {
    try {
      const isMovieExist = await this.moviesModel.findById(movie_id);
      if (!isMovieExist) {
        throw new Error('Movie Not Found');
      }
      return await this.moviesModel.findByIdAndUpdate({ _id: movie_id }, data);
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  // This method used to delete a movie based on id
  // This method end point is ....
  // @Delete('/api/admin/movies/:id')
  async deleteMovieById(id: string): Promise<any> {
    try {
      const isMovieExist = await this.moviesModel.findById(id);
      if (!isMovieExist) {
        throw new Error('Movie Not Found');
      }
      (isMovieExist.movie_reviews as any).map(async (review) => {
        await this.reviewService.deleteReviewById(review._id);
      });
      return await this.moviesModel.findByIdAndDelete({ _id: id });
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  // This is method used to delete all movies
  // This method call the deleteMovieById method as internally.
  // This method end point is .....
  // @Delete('/api/admin/movies')
  async deleteAllMovies(): Promise<any> {
    try {
      const allMovies = await this.moviesModel.find();
      if (!allMovies.length) {
        throw new Error('No Movies Found');
      }
      const deleteAllMovies: Promise<boolean> | Promise<any>[] = await (
        await Promise.all(allMovies as any)
      ).map(async (movie) => await this.deleteMovieById(movie));
      if (deleteAllMovies.length) throw new Error('No Movies Deleted.');
      return { success: true, message: 'All Movies Deleted' };
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}

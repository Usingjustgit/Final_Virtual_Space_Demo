import { InjectModel } from '@nestjs/mongoose';
import { Movies, MoviesDocument } from './movies.entity';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Model } from 'mongoose';
import { UserService } from 'src/user_information/user.service';

@Injectable()
export class MoviesServices {
  constructor(
    @InjectModel(Movies.name)
    private readonly moviesModel: Model<MoviesDocument>,
    private readonly userService: UserService,
  ) {}

  // This method return all movies
  // This method find all movies availabe on the our database
  // This method end point is ....
  // @Get("/api/movies")
  async getAllMovies(): Promise<any> {
    try {
      return await this.moviesModel.find();
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  // This method create a new movie in the database
  // return the string if movie is created successfully else throw the error
  // This method end point is .....
  // @Post("/api/movies")
  async createMovie(user_id: String, movie: Movies): Promise<any> {
    try {
      const isMoviesExist = await this.moviesModel.findOne({
        movie_title: movie.movie_title,
      });
      if (isMoviesExist) {
        throw new BadRequestException('Movie Already Exist');
      }
      const movieCreated = new this.moviesModel({
        ...movie,
        user_id,
      });
      await movieCreated.save();
      return { status: 201, message: 'movie created successfully' };
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  // This method return a movie based on id
  // This method return the string else error
  // This method end point is ....
  // @Get("/api/movies/:id")
  async updateMovie(movie_id: string) {
    try {
      const movie = await this.userService.findOne(movie_id);
      if (!movie) {
        throw new NotFoundException('movie not found');
      } // if movie not found then throw the error
      await this.moviesModel.findByIdAndUpdate(movie_id, movie); //update movie if found
      return { status: 200, message: 'movie updated successfully' };
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  // This method delete a movie based on id
  // In this movie id get from it token so user must need to login to delete it
  // This method end point is ....
  // @Delete("/api/movies/:id")
  async deleteMovie(email: string, movie_id: string): Promise<any> {
    try {
      const currentUser = await this.userService.findUserByEmail(email);
      const movie = await this.userService.findOne(movie_id);
      if (!movie) {
        throw new NotFoundException('movie not found');
      }
      await this.moviesModel.findByIdAndDelete(movie_id);
      return { status: 200, message: 'movie deleted successfully' };
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  async searchMovie(user_query: any): Promise<any> {
    try {
      const {
        movie_catagory,
        movie_title,
        movie_language,
        movie_rating,
        movie_year,
        search,
      } = user_query;
      const limit = user_query.limit || 3; // This limit variable is used for pagination to view given limit movies
      const skip = (user_query.page - 1 || 1) * limit; // This skip variable is used for pagination to view given skip movies
      const findQuery = {
        ...(movie_catagory && {
          movie_catagory: `[a-zA-Z0-9@#!.<> ]?${movie_catagory}[a-zA-Z0-9@#!.<> ]?`,
        }),
        ...(movie_title && {
          movie_title: `[a-zA-Z0-9@#!.<> ]?${movie_title}[a-zA-Z0-9@#!.<> ]?`,
        }),
        ...(movie_language && {
          movie_language: `[a-zA-Z0-9@#!.<> ]?${movie_language}[a-zA-Z0-9@#!.<> ]?`,
        }),
        ...(movie_rating && { movie_rating }),
        ...(movie_year && { movie_year }),
        ...(search && {
          movie_title: {
            $regex: `[a-zA-Z0-9@#!.<> ]?${search}[a-zA-Z0-9@#!.<> ]?`,
            $options: 'i',
          },
        }),
      }; // This query is used for search to which parameter to search in the given movies database
      let movies = await this.moviesModel
        .find(findQuery)
        .skip(skip)
        .limit(limit); // This method is used to find the movies based on the query
      if (!movies.length) {
        movies = await this.moviesModel.aggregate([
          { $sample: { size: limit } },
        ]);
      }
      return movies;
    } catch (error) {
      throw new NotFoundException(error);
    }
  }
}

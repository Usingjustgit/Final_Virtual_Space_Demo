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
}

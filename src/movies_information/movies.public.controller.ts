import {
  BadRequestException,
  Controller,
  Get,
  InternalServerErrorException,
  Param,
  Query,
  UseFilters,
} from '@nestjs/common';
import { MoviesServices } from './movies.services';
import { movies } from './dummy.Movies';
import { CustomException } from 'src/exceptions/custom.exception';

@Controller('/api/movies')
@UseFilters(CustomException)
export class MoviesPublicController {
  constructor(private readonly moviesService: MoviesServices) {}

  //This router return string if all movies are added into the database
  // Also It's take as parameter in a array of a movie object
  @Get('/')
  async addSomeMovies() {
    try {
      const isAdded = await this.moviesService.addSomeMovies(movies);
      if (!isAdded) {
        throw new BadRequestException('Failed to add some movies');
      }
      return 'Movies added successfully';
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  //This router return all movies
  // And return the result of all movies
  @Get('/all')
  async getAllMovies(@Query() query): Promise<any> {
    return await this.moviesService.getAllMovies();
  }

  //This router return a movie based on id
  // This router take a parameter id
  @Get('/:id')
  async getMovieById(@Param('id') movie_id: string): Promise<any> {
    return await this.moviesService.getMovieById(movie_id);
  }

  //This router return all movies based on query
  // This router take a query parameter
  // And return the result of movies
  @Get('/serch')
  async serchMovie(@Query() query): Promise<any> {
    return await this.moviesService.searchMovie(query);
  }
}

import {
  BadRequestException,
  Body,
  Controller,
  Get,
  InternalServerErrorException,
  Param,
  Post,
  Query,
  Request,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { MoviesServices } from './movies.services';
import { movies } from './dummy.Movies';
import { CustomException } from 'src/exceptions/custom.exception';
import { AuthGuard } from '@nestjs/passport';

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

  @Get('/all')
  async getAllMovies(@Query() query): Promise<any> {
    // return await this.moviesService.getAllMovies();
    return await this.moviesService.searchMovie(query);
  }

  @Get('/:id')
  async getMovieById(@Param('id') movie_id: string): Promise<any> {
    return await this.moviesService.getMovieById(movie_id);
  }

  @Get('/serch')
  async serchMovies(): Promise<any> {
    return 'This Method is called...';
  }
}

import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Request,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { CustomException } from 'src/exceptions/custom.exception';
import { MoviesServices } from './movies.services';
import { Movies } from './movies.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('/api/moives')
@UseFilters(CustomException) // use custom exception class to handle the error itself
export class MoviesController {
  constructor(private readonly moviesService: MoviesServices) {}

  //This router return all movies
  @Get('/')
  async getAllMovies(): Promise<any> {
    return await this.moviesService.getAllMovies();
  }

  // This router create a new movie
  // This router take a movie object and verify the user token to get the user id
  // return the string if movie is created successfully else throw the error
  @Post('/')
  @UseGuards(AuthGuard('jwt'))
  async createMovie(@Request() req, @Body() movie: Movies): Promise<any> {
    return await this.moviesService.createMovie(req.user.id, movie);
  }

  // This router delete a movie
  // This router take a movie id and verify the user token to get the user id
  // return the string if movie is deleted successfully else throw the error
  @Post('/delete')
  @UseGuards(AuthGuard('jwt'))
  async deleteMovie(
    @Request() req,
    @Param('movie_id') movie_id: string,
  ): Promise<any> {
    return await this.moviesService.deleteMovie(req.user.id, movie_id); // This is called into the movies servies
  }

  @Get('/search')
  async searchMovie(@Query() query): Promise<any> {
    return await this.moviesService.searchMovie(query);
  }
}

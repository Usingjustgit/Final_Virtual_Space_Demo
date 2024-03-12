import {
  Body,
  Controller,
  Delete,
  Param,
  Post,
  Put,
  Request,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { MoviesServices } from './movies.services';
import { CustomException } from 'src/exceptions/custom.exception';
import { AuthGuard } from '@nestjs/passport';
import { RoleGaurd } from 'src/authentication/auth.rolegaurd';

@Controller('/api/admin/movies') // This controller is for admin
@UseFilters(CustomException) // This will catch all the exceptions
@UseGuards(AuthGuard('jwt'), new RoleGaurd()) // This guard is for admin to verify the user is admin or not if is admin then allow to access it
export class MoviesAdminController {
  constructor(private readonly moviesService: MoviesServices) {}

  // This router used to create a movie
  // This router take two parameter it is a user object from the auth guard and a movie object
  // This router end point is /api/admin/movies/add
  @Post('/add')
  async addMovie(@Request() req, @Body() movie_info: any) {
    return await this.moviesService.createMovie(req._id, movie_info);
  }

  // This router used to update movies
  // This router take two parameter it is a user object from the auth guard and a movie object
  // This router end point is /api/admin/movies/update/:id
  @Put('/:id')
  async updateMovie(
    @Param('id') movie_id,
    @Request() req,
    @Body() movie_info: any,
  ) {
    return await this.moviesService.updateMovie(req._id, movie_id, movie_info);
  }

  @Delete('/:id')
  async deleteMovie(@Param('id') movie_id) {
    return await this.moviesService.deleteMovieById(movie_id);
  }

  @Delete('/')
  async deleteAllMovies() {
    return await this.moviesService.deleteAllMovies();
  }
}

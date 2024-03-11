import {
  Body,
  Controller,
  Param,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { MoviesServices } from './movies.services';
import { AuthGuard } from '@nestjs/passport';

@Controller('/api/private/movies')
@UseGuards(AuthGuard('jwt'))
export class MoviesPrivateController {
  constructor(private readonly moviesService: MoviesServices) {}

  @Post('/review/:movie_id')
  async createReviews(
    @Request() req,
    @Param('movie_id') movie_id: string,
    @Body() user_reviews: any,
  ): Promise<any> {
    return await this.moviesService.createReviews(
      req.user,
      movie_id,
      user_reviews,
    );
  }
}

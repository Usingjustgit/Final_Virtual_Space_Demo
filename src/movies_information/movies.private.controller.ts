import {
  Body,
  Controller,
  Param,
  Post,
  Request,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { MoviesServices } from './movies.services';
import { AuthGuard } from '@nestjs/passport';
import { CustomException } from 'src/exceptions/custom.exception';

@Controller('/api/private/movies')
@UseFilters(CustomException)
@UseGuards(AuthGuard('jwt'))
export class MoviesPrivateController {
  constructor(private readonly moviesService: MoviesServices) {}

  // This route is for creating reviews
  // This route takes movie_id and user_reviews
  // and return the review
  @Post('/:movie_id/review')
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

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Movies, moviesSchema } from './movies.entity';
import { MoviesServices } from './movies.services';
import { MoviesController } from './movies.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Movies.name, schema: moviesSchema }]),
  ],
  controllers: [MoviesController],
  providers: [MoviesServices],
  exports: [MoviesServices],
})
export class MoviesModule {}

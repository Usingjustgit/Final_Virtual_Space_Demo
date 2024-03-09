import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Movies, moviesSchema } from './movies.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Movies.name, schema: moviesSchema }]),
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class MoviesModule {}

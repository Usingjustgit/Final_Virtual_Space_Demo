import { Module, forwardRef } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Movies, moviesSchema } from './movies.entity';
import { MoviesServices } from './movies.services';
import { MoviesController } from './movies.controller';
import { UserModule } from 'src/user_information/user.module';
import { ReviewsModule } from './reviews/reviews.module';
import { CastModule } from './casts/cast.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Movies.name, schema: moviesSchema }]),
    forwardRef(() => ReviewsModule),
    forwardRef(() => CastModule),
    forwardRef(() => UserModule),
  ],
  controllers: [MoviesController],
  providers: [MoviesServices],
  exports: [MoviesServices],
})
export class MoviesModule {}

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Reviews, reviewsSchema } from './reviews.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Reviews.name, schema: reviewsSchema }]),
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class ReviewsModule {}

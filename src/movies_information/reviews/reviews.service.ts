import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Reviews, ReviewsDocument } from './reviews.entity';

@Injectable()
export class ReviewsService {
  constructor(
    @InjectModel(Reviews.name)
    private readonly reviewModel: Model<ReviewsDocument>,
  ) {}

  async getAllReview(): Promise<any> {
    try {
      return await this.reviewModel.find();
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  async createReviesOfMovie(
    user: any,
    movie_id: string,
    user_review: any,
  ): Promise<any> {
    try {
      const { comment, movie_rating } = user_review;
      const newReview = new this.reviewModel({
        user_id: user._id,
        movie_id,
        user_name: user.fullName,
        user_image: 'user.image', // Assuming user.image is the field to be used
        movie_rating,
        comment,
      });
      const review = await newReview.save();
      return review;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}

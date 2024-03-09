import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

export type ReviewsDocument = Reviews & Document;

@Schema()
export class Reviews {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user_id: string;

  @Prop({ type: String, required: [true, 'user name is required'] })
  user_name: string;

  @Prop({ type: String, required: [true, 'user image is required'] })
  user_image: string;

  @Prop({ type: Number, required: [true, 'movie rating is required'] })
  movie_rating: number;

  @Prop({ type: String, required: [true, 'comment is required'] })
  comment: string;
}

export const reviewsSchema = SchemaFactory.createForClass(Reviews);

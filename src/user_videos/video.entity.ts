import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

export type VideosDocument = Videos & Document;

@Schema({ timestamps: true })
export class Videos {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user_id: string;

  @Prop({ type: String, required: [true, 'video_title is required'] })
  video_title: string;

  @Prop({ type: String, required: [true, 'video_description is required'] })
  video_description: string;

  @Prop({ type: String, required: [true, 'video_video_url is required'] })
  video_url: string;

  @Prop({ type: Boolean, default: true })
  isPublic: boolean;
}

export const videosSchema = SchemaFactory.createForClass(Videos);

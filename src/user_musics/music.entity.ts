import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

export type MusicDocument = Music & Document;

@Schema({ timestamps: true })
export class Music {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user_id: string;

  @Prop({ type: String, required: [true, 'music_title is required'] })
  music_title: string;

  @Prop({ type: String, required: [true, 'music_description is required'] })
  music_description: string;

  @Prop({ type: String, required: [true, 'music_url is required'] })
  music_url: string;

  @Prop({ type: Boolean, default: false })
  isPublic: boolean;
}

export const MusicSchema = SchemaFactory.createForClass(Music);

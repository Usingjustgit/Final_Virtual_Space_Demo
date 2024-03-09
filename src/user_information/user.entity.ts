import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import validator from 'validator';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({
    type: String,
    required: [true, 'Name is required'],
  })
  fullName: string;

  @Prop({
    type: String,
    validate: [validator.isEmail, 'Please provide a valid email'],
    unique: [true, 'Email already exists'],
  })
  email: string;

  @Prop({ type: String, required: [true, 'Password is required'] })
  password: string;

  @Prop({ type: String })
  image: string;

  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'Movies' }])
  likedMovies: string[];

  @Prop({ type: Boolean, default: true })
  isAdmin: boolean;

  @Prop({ type: String })
  timestamp: string;

  @Prop({ type: String })
  token: string;

  @Prop({ type: String, default: new Date().toISOString() })
  createdAt: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

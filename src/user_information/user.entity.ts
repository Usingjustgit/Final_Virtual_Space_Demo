import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ type: String, required: [true, 'Name is required'] })
  name: string;

  @Prop({ type: String, unique: [true, 'Email already exists'] })
  email: string;

  @Prop({ type: String, required: [true, 'Password is required'] })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

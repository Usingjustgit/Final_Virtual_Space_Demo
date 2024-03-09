import { Prop, SchemaFactory } from '@nestjs/mongoose';

export type CastDocument = Cast & Document;

export class Cast {
  @Prop({ type: String, required: [true, 'Cast name is required'] })
  cast_name: string;

  @Prop({ type: String, required: [true, 'Image name is required'] })
  cast_image: string;
}

export const castSchema = SchemaFactory.createForClass(Cast);

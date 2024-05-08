import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

export type DocsDocument = Docs & Document;

@Schema({ timestamps: true })
export class Docs {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user_id: string;

  @Prop({ type: String, required: [true, 'docs_title is required'] })
  docs_title: string;

  @Prop({ type: String, required: [true, 'docs_description is required'] })
  docs_description: string;

  @Prop({ type: String, required: [true, 'docs_image is required'] })
  docs_image: string;

  @Prop({ type: String, required: [true, 'docs_docs_url is required'] })
  docs_url: string;
}

export const docsSchema = SchemaFactory.createForClass(Docs);

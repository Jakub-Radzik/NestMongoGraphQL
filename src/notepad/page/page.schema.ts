import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Notepad } from '../notepad.schema';

export type PageDocument = Page & Document;

@Schema()
export class Page {
  @Prop({ required: true })
  title: string;

  @Prop()
  content: string;
}

export const PageSchema = SchemaFactory.createForClass(Page);

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Mongoose } from 'mongoose';
import { Page } from './page/page.schema';
import * as mongoose from 'mongoose';

export type NotepadDocument = Notepad & Document;

@Schema()
export class Notepad {
  @Prop({ required: true })
  title: string;

  @Prop()
  content: string;

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Page' }],
  })
  readonly pages: Page[];
}

export const NotepadSchema = SchemaFactory.createForClass(Notepad);

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type NotepadDocument = Notepad & Document;

@Schema()
export class Notepad {
  @Prop({ required: true })
  title: string;

  @Prop()
  content: string;
}

export const NotepadSchema = SchemaFactory.createForClass(Notepad);

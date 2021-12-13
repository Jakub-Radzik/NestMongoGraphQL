import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateNotepadInput, Page } from 'src/graphql';
import { Notepad, NotepadDocument } from './notepad.schema';

@Injectable()
export class NotepadService {
  constructor(
    @InjectModel(Notepad.name) private notepadModel: Model<NotepadDocument>
  ) {}

  findAll() {
    return this.notepadModel.find().exec();
  }

  findOne(id: string) {
    return this.notepadModel.findById(id);
  }

  create(notepad: CreateNotepadInput) {
    const createNotepad = new this.notepadModel(notepad);
    return createNotepad.save();
  }

  update(id: string, notepad: CreateNotepadInput) {
    return this.notepadModel.findByIdAndUpdate(id, notepad);
  }

  delete(id: string) {
    return this.notepadModel.findByIdAndDelete(id);
  }
}

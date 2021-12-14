import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateNotepadInput } from 'src/graphql';
import { Notepad, NotepadDocument } from './notepad.schema';

@Injectable()
export class NotepadService {
  constructor(
    @InjectModel(Notepad.name) private notepadModel: Model<NotepadDocument>
  ) {}

  async findAll() {
    return await this.notepadModel.find().populate('pages').exec();
  }

  async findOne(id: string) {
    return await this.notepadModel.findById(id).populate('pages').exec();
  }

  async create(notepad: CreateNotepadInput) {
    const createNotepad = new this.notepadModel(notepad);
    console.dir(createNotepad);
    return await createNotepad.save();
  }

  // TODO: update
  async update(id: string, notepad: CreateNotepadInput) {
    return await this.notepadModel.findByIdAndUpdate(id, notepad);
  }

  // TODO: delete
  async delete(id: string) {
    return await this.notepadModel.findByIdAndDelete(id);
  }
}

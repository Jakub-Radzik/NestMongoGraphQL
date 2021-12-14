import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import {
  CreateNotepadInput,
  CreatePageInput,
  UpdatePageInput,
} from 'src/graphql';
import { Notepad, NotepadDocument } from '../notepad.schema';
import { NotepadService } from '../notepad.service';
import { PageDocument, Page } from './page.schema';

@Injectable()
export class PageService {
  constructor(
    @InjectModel(Page.name) private pageModel: Model<PageDocument>,
    private notepadService: NotepadService
  ) {}

  async findPages(notepadId: string) {
    return await (
      await this.notepadService.findOne(notepadId)
    ).pages;
  }

  async create(notepadId: string, createPageInput: CreatePageInput) {
    const notepad = await this.notepadService.findOne(notepadId);
    const createdPage = new this.pageModel(createPageInput);
    await createdPage.save();
    console.dir(createdPage);
    notepad.pages.push(createdPage);
    await notepad.save();
    return createdPage;
  }

  update(id: string, updatePageInput: UpdatePageInput) {
    return null;
  }

  delete(id: string) {
    return null;
  }
}

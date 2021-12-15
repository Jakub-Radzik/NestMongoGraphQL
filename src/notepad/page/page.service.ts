import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePageInput, UpdatePageInput } from 'src/graphql';
import { NotepadService } from '../notepad.service';
import { Page, PageDocument } from './page.schema';

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

  async update(id: string, updatePageInput: UpdatePageInput) {
    return await this.pageModel.findByIdAndUpdate(id, updatePageInput);
  }

  async delete(id: string) {
    return await this.pageModel.findByIdAndDelete(id);
  }
}

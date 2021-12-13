import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import {
  CreateNotepadInput,
  CreatePageInput,
  Page,
  UpdatePageInput,
} from 'src/graphql';

@Injectable()
export class PageService {
  constructor(@InjectConnection() private connection: Connection) {}

  private readonly notepadsPages: Page[] = [
    { id: '1', title: 'First page', content: 'First page', notepadId: '1a' },
    { id: '2', title: 'Second page', content: 'Second page', notepadId: '1a' },
    { id: '3', title: 'Third page', content: 'Third page', notepadId: '1a' },
    { id: '4', title: 'Fourth page', content: 'Fourth page', notepadId: '2b' },
    { id: '5', title: 'Fifth page', content: 'Fifth page', notepadId: '3c' },
  ];

  findPages(notepadId: string): Page[] {
    return this.notepadsPages.filter(page => page.notepadId === notepadId);
  }

  create(createPageInput: CreatePageInput): Page {
    const newPage = {
      id: this.notepadsPages.length + 1 + '',
      title: createPageInput.title,
      content: '',
      notepadId: createPageInput.notepadId,
    };
    this.notepadsPages.push(newPage);
    return newPage;
  }

  update(id: string, updatePageInput: UpdatePageInput): Page {
    const pageToUpdate = this.notepadsPages.find(p => p.id === id);
    pageToUpdate.title = updatePageInput.title;
    pageToUpdate.content = updatePageInput.content;
    return pageToUpdate;
  }

  delete(id: string): Page {
    const pageToDelete = this.notepadsPages.find(p => p.id === id);
    this.notepadsPages.splice(this.notepadsPages.indexOf(pageToDelete), 1);
    return pageToDelete;
  }
}

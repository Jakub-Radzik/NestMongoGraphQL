import { Injectable } from '@nestjs/common';
import { Page } from 'src/graphql';

@Injectable()
export class PageService {
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
}

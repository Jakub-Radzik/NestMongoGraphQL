import { Injectable } from '@nestjs/common';
import { CreateNotepadInput, Notepad, Page } from 'src/graphql';

@Injectable()
export class NotepadService {
  private readonly notepads: Notepad[] = [
    { id: '1a', title: 'First notepad', content: 'First notepad content' },
    { id: '2b', title: 'Second notepad', content: 'Second notepad content' },
    { id: '3c', title: 'Third notepad', content: 'Third notepad content' },
  ];

  findAll(): Notepad[] {
    return this.notepads;
  }

  findOne(id: string): Notepad {
    return this.notepads.find(notepad => notepad.id === id);
  }

  create(notepad: CreateNotepadInput): Notepad {
    const newNotepad: Notepad = {
      id: '',
    };

    do {
      newNotepad.id = Math.random().toString(36).substring(2);
    } while (
      this.notepads.find(notepad => notepad.id === newNotepad.id) ||
      !newNotepad.id
    );

    newNotepad.title = notepad.title;
    newNotepad.content = notepad.content;

    this.notepads.push(newNotepad);
    return newNotepad;
  }
}

import { ParseIntPipe } from '@nestjs/common';
import { Args, Resolver, Query } from '@nestjs/graphql';
import { Notepad } from 'src/graphql';
import { NotepadService } from './notepad.service';

@Resolver('Notepad')
export class NotepadResolver {
  constructor(private notepadService: NotepadService) {}

  @Query(returns => Notepad, { name: 'notepad', nullable: false })
  notepad(@Args('id') id: string): Notepad {
    return this.notepadService.findOne(id);
  }

  @Query(returns => [Notepad], { name: 'notepads', nullable: 'items' })
  notepads(): Notepad[] {
    return this.notepadService.findAll();
  }
}

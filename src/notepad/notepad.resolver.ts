import { ParseIntPipe } from '@nestjs/common';
import {
  Args,
  Resolver,
  Query,
  ResolveField,
  Parent,
  Mutation,
} from '@nestjs/graphql';
import { CreateNotepadInput, Notepad } from 'src/graphql';
import { NotepadService } from './notepad.service';
import { PageService } from './page.service';

@Resolver('Notepad')
export class NotepadResolver {
  constructor(
    private notepadService: NotepadService,
    private pageService: PageService
  ) {}

  @Query(returns => Notepad, { name: 'notepad', nullable: false })
  notepad(@Args('id') id: string): Notepad {
    return this.notepadService.findOne(id);
  }

  @Query(returns => [Notepad], { name: 'notepads', nullable: 'items' })
  notepads(): Notepad[] {
    return this.notepadService.findAll();
  }

  @ResolveField()
  pages(@Parent() notepad: Notepad) {
    return this.pageService.findPages(notepad.id);
  }

  @Mutation('createNotepad')
  async createNotepad(
    @Args('createNotepadInput') createNotepadInput: CreateNotepadInput
  ) {
    return this.notepadService.create(createNotepadInput);
  }
}

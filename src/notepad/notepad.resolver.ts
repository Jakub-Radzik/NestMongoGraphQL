import { ParseIntPipe } from '@nestjs/common';
import {
  Args,
  Resolver,
  Query,
  ResolveField,
  Parent,
  Mutation,
} from '@nestjs/graphql';
import {
  CreateNotepadInput,
  CreatePageInput,
  Notepad,
  UpdatePageInput,
} from 'src/graphql';
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

  @Mutation('updateNotepad')
  async updateNotepad(
    @Args('id') id: string,
    @Args('updateNotepadInput') updateNotepadInput: CreateNotepadInput
  ) {
    return this.notepadService.update(id, updateNotepadInput);
  }

  @Mutation('deleteNotepad')
  async deleteNotepad(@Args('id') id: string) {
    return this.notepadService.delete(id);
  }

  @Mutation('createPage')
  async createPage(@Args('createPageInput') createPageInput: CreatePageInput) {
    return this.pageService.create(createPageInput);
  }

  @Mutation('updatePage')
  async updatePage(
    @Args('id') id: string,
    @Args('updatePageInput') updatePageInput: UpdatePageInput
  ) {
    return this.pageService.update(id, updatePageInput);
  }

  @Mutation('deletePage')
  async deletePage(@Args('id') id: string) {
    return this.pageService.delete(id);
  }
}

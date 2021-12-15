import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateNotepadInput, Notepad } from 'src/graphql';
import { NotepadService } from './notepad.service';

@Resolver('Notepad')
export class NotepadResolver {
  constructor(private notepadService: NotepadService) {}

  @Query(returns => Notepad, { name: 'notepad', nullable: false })
  async notepad(@Args('id') id: string) {
    return await this.notepadService.findOne(id);
  }

  @Query(returns => [Notepad], { name: 'notepads', nullable: 'items' })
  async notepads() {
    return await this.notepadService.findAll();
  }

  @Mutation('createNotepad')
  async createNotepad(
    @Args('createNotepadInput') createNotepadInput: CreateNotepadInput
  ) {
    return await this.notepadService.create(createNotepadInput);
  }

  @Mutation('updateNotepad')
  async updateNotepad(
    @Args('id') id: string,
    @Args('updateNotepadInput') updateNotepadInput: CreateNotepadInput
  ) {
    return await this.notepadService.update(id, updateNotepadInput);
  }

  @Mutation('deleteNotepad')
  async deleteNotepad(@Args('id') id: string) {
    return await this.notepadService.delete(id);
  }
}

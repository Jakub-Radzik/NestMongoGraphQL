import {
  Args,
  Mutation,
  Parent,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { CreatePageInput, Notepad, UpdatePageInput } from 'src/graphql';
import { PageService } from './page.service';

@Resolver()
export class PageResolver {
  constructor(private pageService: PageService) {}

  @ResolveField()
  async pages(@Parent() notepad: Notepad) {
    return await this.pageService.findPages(notepad.id);
  }

  @Mutation('createPage')
  async createPage(
    @Args('notepadId') notepadId: string,
    @Args('createPageInput') createPageInput: CreatePageInput
  ) {
    return await this.pageService.create(notepadId, createPageInput);
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

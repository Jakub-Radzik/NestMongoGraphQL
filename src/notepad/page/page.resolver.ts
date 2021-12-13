import {
  Args,
  Mutation,
  Parent,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { CreatePageInput, Notepad, UpdatePageInput } from 'src/graphql';
import { PageService } from '../page.service';

@Resolver()
export class PageResolver {
  constructor(private pageService: PageService) {}

  @ResolveField()
  pages(@Parent() notepad: Notepad) {
    return this.pageService.findPages(notepad.id);
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

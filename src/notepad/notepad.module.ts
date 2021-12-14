import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Notepad, Page } from 'src/graphql';
import { NotepadResolver } from './notepad.resolver';
import { NotepadSchema } from './notepad.schema';
import { NotepadService } from './notepad.service';
import { PageService } from './page/page.service';
import { PageSchema } from './page/page.schema';
import { PageResolver } from './page/page.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Notepad.name, schema: NotepadSchema },
      { name: Page.name, schema: PageSchema },
    ]),
  ],
  providers: [PageResolver, NotepadResolver, NotepadService, PageService],
})
export class NotepadModule {}

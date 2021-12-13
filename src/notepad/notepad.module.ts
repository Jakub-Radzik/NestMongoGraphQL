import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Notepad } from 'src/graphql';
import { NotepadResolver } from './notepad.resolver';
import { NotepadSchema } from './notepad.schema';
import { NotepadService } from './notepad.service';
import { PageService } from './page.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Notepad.name, schema: NotepadSchema }]),
  ],
  providers: [NotepadResolver, NotepadService, PageService],
})
export class NotepadModule {}

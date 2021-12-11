import { Module } from '@nestjs/common';
import { NotepadResolver } from './notepad.resolver';
import { NotepadService } from './notepad.service';
import { PageService } from './page.service';

@Module({
  providers: [NotepadResolver, NotepadService, PageService],
})
export class NotepadModule {}

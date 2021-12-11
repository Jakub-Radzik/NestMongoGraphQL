import { Module } from '@nestjs/common';
import { NotepadResolver } from './notepad.resolver';
import { NotepadService } from './notepad.service';

@Module({
   providers: [NotepadResolver, NotepadService],
})
export class NotepadModule {}

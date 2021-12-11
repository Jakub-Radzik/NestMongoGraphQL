import { Notepad } from 'src/graphql';
import { NotepadService } from './notepad.service';
export declare class NotepadResolver {
    private notepadService;
    constructor(notepadService: NotepadService);
    notepad(id: string): Notepad;
    notepads(): Notepad[];
}

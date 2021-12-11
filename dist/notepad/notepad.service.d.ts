import { Notepad } from 'src/graphql';
export declare class NotepadService {
    private readonly notepads;
    findAll(): Notepad[];
    findOne(id: string): Notepad;
}

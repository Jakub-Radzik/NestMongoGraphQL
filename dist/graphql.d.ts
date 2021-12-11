export declare class Notepad {
    __typename?: 'Notepad';
    id: string;
    title?: Nullable<string>;
    content?: Nullable<string>;
}
export declare abstract class IQuery {
    __typename?: 'IQuery';
    abstract notepad(id: string): Nullable<Notepad> | Promise<Nullable<Notepad>>;
    abstract notepads(): Nullable<Nullable<Notepad>[]> | Promise<Nullable<Nullable<Notepad>[]>>;
}
export declare class Mutations {
    __typename?: 'Mutations';
    createNotepad?: Nullable<Notepad>;
    updateNotepad?: Nullable<Notepad>;
    deleteNotepad?: Nullable<Notepad>;
}
declare type Nullable<T> = T | null;
export {};


/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class Notepad {
    __typename?: 'Notepad';
    id: string;
    title?: Nullable<string>;
    content?: Nullable<string>;
}

export abstract class IQuery {
    __typename?: 'IQuery';

    abstract notepad(id: string): Nullable<Notepad> | Promise<Nullable<Notepad>>;

    abstract notepads(): Nullable<Nullable<Notepad>[]> | Promise<Nullable<Nullable<Notepad>[]>>;
}

export class Mutations {
    __typename?: 'Mutations';
    createNotepad?: Nullable<Notepad>;
    updateNotepad?: Nullable<Notepad>;
    deleteNotepad?: Nullable<Notepad>;
}

type Nullable<T> = T | null;

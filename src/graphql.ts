
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateNotepadInput {
    title?: Nullable<string>;
    content?: Nullable<string>;
}

export class UpdateNotepadInput {
    title?: Nullable<string>;
    content?: Nullable<string>;
}

export class CreatePageInput {
    notepadId: string;
    title?: Nullable<string>;
}

export class UpdatePageInput {
    title?: Nullable<string>;
    content?: Nullable<string>;
}

export class Notepad {
    __typename?: 'Notepad';
    id: string;
    title?: Nullable<string>;
    content?: Nullable<string>;
    pages?: Nullable<Nullable<Page>[]>;
}

export class Page {
    __typename?: 'Page';
    id: string;
    title?: Nullable<string>;
    content?: Nullable<string>;
    notepadId: string;
}

export abstract class IQuery {
    __typename?: 'IQuery';

    abstract notepad(id: string): Nullable<Notepad> | Promise<Nullable<Notepad>>;

    abstract notepads(): Nullable<Nullable<Notepad>[]> | Promise<Nullable<Nullable<Notepad>[]>>;

    abstract pages(notepadId: string): Nullable<Nullable<Page>[]> | Promise<Nullable<Nullable<Page>[]>>;
}

export abstract class IMutation {
    __typename?: 'IMutation';

    abstract createNotepad(createNotepadInput?: Nullable<CreateNotepadInput>): Nullable<Notepad> | Promise<Nullable<Notepad>>;

    abstract updateNotepad(id: string, title?: Nullable<string>, content?: Nullable<string>): Nullable<Notepad> | Promise<Nullable<Notepad>>;

    abstract deleteNotepad(id: string): Nullable<Notepad> | Promise<Nullable<Notepad>>;

    abstract createPage(notepadId: string, title: string, content: string): Nullable<Page> | Promise<Nullable<Page>>;

    abstract updatePage(id: string, title?: Nullable<string>, content?: Nullable<string>): Nullable<Page> | Promise<Nullable<Page>>;

    abstract deletePage(id: string): Nullable<Page> | Promise<Nullable<Page>>;
}

type Nullable<T> = T | null;

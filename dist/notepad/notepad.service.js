"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotepadService = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("../graphql");
let NotepadService = class NotepadService {
    constructor() {
        this.notepads = [
            { id: '1a', title: 'First notepad', content: 'First notepad content' },
            { id: '2b', title: 'Second notepad', content: 'Second notepad content' },
            { id: '3c', title: 'Third notepad', content: 'Third notepad content' },
        ];
    }
    findAll() {
        return this.notepads;
    }
    findOne(id) {
        return this.notepads.find(notepad => notepad.id === id);
    }
};
NotepadService = __decorate([
    (0, common_1.Injectable)()
], NotepadService);
exports.NotepadService = NotepadService;
//# sourceMappingURL=notepad.service.js.map
import { Test, TestingModule } from '@nestjs/testing';
import { NotepadResolver } from '../notepad.resolver';

describe('NotepadResolver', () => {
  let resolver: NotepadResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NotepadResolver],
    }).compile();

    resolver = module.get<NotepadResolver>(NotepadResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

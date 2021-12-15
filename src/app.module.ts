import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotepadModule } from './notepad/notepad.module';

const login = 'admin';
const password = 'admin';
const db = 'OneNoteClone';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
        outputAs: 'class',
        emitTypenameField: true,
      },
    }),
    MongooseModule.forRoot(
      `mongodb+srv://${login}:${password}@cluster0.ab4vr.mongodb.net/${db}?retryWrites=true&w=majority`
    ),
    NotepadModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotepadModule } from './notepad/notepad.module';

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
      NotepadModule,
   ],
   controllers: [AppController],
   providers: [AppService],
})
export class AppModule {}

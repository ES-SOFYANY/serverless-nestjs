import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { BooksModule } from './books/books.module';
import { DynamooseModule } from 'nestjs-dynamoose';

@Module({
  imports: [BooksModule, DynamooseModule.forRoot()],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}

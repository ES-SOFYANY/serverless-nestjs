import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { DynamooseModule } from 'nestjs-dynamoose';
import { BookSchema } from './book';

@Module({
  controllers: [BooksController],
  providers: [BooksService],
  imports: [
    DynamooseModule.forFeature([{ name: 'Books', schema: BookSchema }]),
  ],
})
export class BooksModule {}

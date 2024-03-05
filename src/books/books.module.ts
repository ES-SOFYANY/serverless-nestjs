/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { DynamooseModule } from 'nestjs-dynamoose';
import { BookSchema } from './book';

@Module({
  controllers: [BooksController],
  providers: [BooksService],
  imports: [
    DynamooseModule.forFeature([{ name: process.env.DYNAMO_TABLE, schema: BookSchema }]),
  ],
})
export class BooksModule {}

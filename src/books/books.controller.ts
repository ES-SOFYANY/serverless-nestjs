import { Body, Controller, Get, Post } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}
  @Get()
  findAll() {
    return this.booksService.findAll();
  }

  @Post()
  create(@Body() book: any) {
    return this.booksService.create(book);
  }
}

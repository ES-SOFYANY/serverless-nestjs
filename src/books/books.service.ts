import { Injectable } from '@nestjs/common';

@Injectable()
export class BooksService {
  create(book: any) {
    return 'This action adds a new book ' + book.title;
  }
  findAll() {
    return 'This action returns all';
  }
}

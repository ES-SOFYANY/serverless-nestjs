import { Injectable } from '@nestjs/common';
import { InjectModel, Model } from 'nestjs-dynamoose';
import { Book, BookKey } from './book';
import uuid4 from 'uuid4';

@Injectable()
export class BooksService {
  constructor(
    @InjectModel(process.env.DYNAMO_TABLE)
    private userModel: Model<Book, BookKey>,
  ) {}

  async create(book: any): Promise<any> {
    return await this.userModel.create({
      id: uuid4(),
      title: book.title,
      author: book.author,
    } as unknown as Book);
  }
  async findAll(): Promise<any> {
    return await this.userModel.scan().exec();
  }
}

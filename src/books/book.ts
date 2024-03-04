/* eslint-disable prettier/prettier */
import { Schema } from 'dynamoose';

export const BookSchema = new Schema({
  id: {
    type: String,
    hashKey: true,
  },
  title: {
    type: String,
  },
  author: {
    type: String,
  },
});


export interface BookKey {
    id: string;
  }
  
  export interface Book extends BookKey {
    title?: string;
    author?: string;
  }
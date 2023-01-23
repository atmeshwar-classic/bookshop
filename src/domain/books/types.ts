import { DefaultLoadingState } from "../../types";

export type Book = {
  id: string;
  name: string;
  author: string;
  description: string;
  price: number;
}

export type BooksState = DefaultLoadingState & {
  books: Book[];
}
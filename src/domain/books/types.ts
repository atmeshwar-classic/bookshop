import { DefaultLoadingState } from "../../types";

export type Book = {
  id: string;
  name: string;
  author: string;
  description: string;
  price: number;
  onClickPluse?:any
}

export type BooksState = DefaultLoadingState & {
  books: Book[];
}
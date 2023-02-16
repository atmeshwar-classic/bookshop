import { DefaultLoadingState } from "../../types";

export interface Book {
  id: string;
  bookTitle: string;
  bookAuthor: string;
  bookDescription: string;
  bookPrice: number;
  bookImgUrl: string;
}

export type BooksState = DefaultLoadingState & {
  books: Book[];
}

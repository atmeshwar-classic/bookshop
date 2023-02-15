export type DefaultLoadingStatus = 'not loaded' | 'loading' | 'loaded' | 'error';

export type DefaultLoadingState = {
  loading: DefaultLoadingStatus;
  error?: string;
}

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


export type CartItem = {
  id: string;
  bookTitle: string;
  bookAuthor: string;
  bookDescription: string;
  bookPrice: number;
  bookImgUrl: string;
}

export type CartState = DefaultLoadingState & {
  cart: CartItem[];
};
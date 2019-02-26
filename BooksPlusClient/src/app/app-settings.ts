export class AppSettings {
    booksApi: BooksApiDefinition = {
        baseUrl: 'https://localhost:44323',
        books: '/api/books',
        categories: '/api/categories'
    };
}

export interface BooksApiDefinition
{
  baseUrl: string;
  books: string;
  categories: string;
}

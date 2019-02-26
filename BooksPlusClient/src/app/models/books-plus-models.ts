export interface Book
{
  bookId: number;
  categoryId: number;
  title: string;
  publishDate: object;
  price: number;
  isbn: string;

  category: Category;
}

export interface Category
{
  categoryId: number;
  categoryName: string;

  books: Book[];
}

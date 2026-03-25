export interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  coverUrl: string;
  rating?: number;
  genres: string[];
  pages: number;
  format: string;
  language: string;
  publishedYear: number;
  progress?: number; // 0-100
  isNew?: boolean;
  isEditorsChoice?: boolean;
}

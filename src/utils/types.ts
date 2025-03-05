
export type Category = 
  | 'movies'
  | 'jokes'
  | 'books'
  | 'food'
  | 'life'
  | 'tech'
  | 'music'
  | 'art'
  | 'random';

export type HighnessRating = 1 | 2 | 3 | 4 | 5;

export interface Idea {
  id: string;
  content: string;
  category: Category;
  highness: HighnessRating;
  author: string;
  createdAt: Date;
  likes: number;
}

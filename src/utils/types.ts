
export type Category = 
  | 'movies'
  | 'jokes'
  | 'books'
  | 'food'
  | 'life'
  | 'tech'
  | 'music'
  | 'art'
  | 'picture'
  | 'random';

export type HighnessRating = 1 | 2 | 3 | 4 | 5;

export interface Comment {
  id: string;
  content: string;
  author: string;
  createdAt: Date;
}

export interface Idea {
  id: string;
  content: string;
  category: Category;
  highness: HighnessRating;
  author: string;
  createdAt: Date;
  likes: number;
  comments?: Comment[];
}

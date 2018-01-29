export interface Comment {
  id: string;
  body: string;
  score: number;
  author: string;
  replies: Comment[];
  createdOnUtc: number;
}

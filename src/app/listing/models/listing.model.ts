import { ListingImage } from './listing-image.model';
import { Comment } from './comment.model';

export interface Listing {
  id: string;
  title: string;
  url: string;
  author: string;
  subreddit: string;
  score: number;
  numOfcomments: number;
  previewImage?: ListingImage;
  comments: Comment[];
}

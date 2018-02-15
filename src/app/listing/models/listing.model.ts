import { ListingImage } from './listing-image.model';
import { Comment } from './comment.model';
import { ListingMedia } from './listing-media';

export interface Listing {
  id: string;
  name: string;
  title: string;
  url: string;
  author: string;
  subreddit: string;
  score: number;
  numOfcomments: number;
  previewImage?: ListingImage;
  media?: ListingMedia;
  comments: Comment[];
}

export interface Listing {
  name: string;
  title: string;
  url: string;
  previewImageUrl?: string;
  author: string;
  subreddit: string;
  score: number;
  numOfcomments: number;
}

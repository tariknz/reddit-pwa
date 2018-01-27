export interface Listing {
  name: string;
  title: string;
  url: string;
  author: string;
  subreddit: string;
  score: number;
  numOfcomments: number;
  previewImage?: ListingImage;
}

export interface ListingImage {
  url: string;
  width: number;
  height: number;
}

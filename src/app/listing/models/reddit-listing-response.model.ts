export declare namespace RedditResponse {
  export interface Source {
    url: string;
    width: number;
    height: number;
  }

  export interface Resolution {
    url: string;
    width: number;
    height: number;
  }

  export interface Gif {
    source: Source;
    resolutions: Resolution[];
  }

  export interface Mp4 {
    source: Source;
    resolutions: Resolution[];
  }

  export interface Variants {
    gif: Gif;
    mp4: Mp4;
  }

  export interface Image {
    source: Source;
    resolutions: Resolution[];
    variants: Variants;
    id: string;
  }

  export interface Preview {
    images: Image[];
    enabled: boolean;
  }

  export interface Data {
    children: Listing[];
    after: string;
    before?: any;
    id: string;
    title: string;
    score: number;
    preview: Preview;
    name: string;
    url: string;
    author: string;
    created_utc: number;
    subreddit_name_prefixed: string;
    num_comments: number;
    is_self: boolean;
    body?: string;
    replies?: Listing;
  }

  export interface Listing {
    kind: string;
    data: Data;
  }
}

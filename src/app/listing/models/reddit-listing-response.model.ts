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
    reddit_video_preview: RedditVideoPreview;
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

  export interface RedditVideoPreview {
    fallback_url: string;
    height: number;
    width: number;
    scrubber_media_url: string;
    dash_url: string;
    duration: number;
    hls_url: string;
    is_gif: boolean;
    transcoding_status: string;
}
}

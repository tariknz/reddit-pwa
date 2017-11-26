declare namespace RedditResponseObject {
  export interface MediaEmbed {
    content: string;
    width?: number;
    scrolling?: boolean;
    height?: number;
  }

  export interface Oembed {
    provider_url: string;
    version: string;
    title: string;
    author_name: string;
    height: number;
    width: number;
    html: string;
    thumbnail_width: number;
    provider_name: string;
    thumbnail_url: string;
    type: string;
    thumbnail_height: number;
    author_url: string;
    description: string;
    cache_age?: number;
  }

  export interface SecureMedia {
    type: string;
    oembed: Oembed;
  }

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

  export interface Source2 {
    url: string;
    width: number;
    height: number;
  }

  export interface Resolution2 {
    url: string;
    width: number;
    height: number;
  }

  export interface Gif {
    source: Source2;
    resolutions: Resolution2[];
  }

  export interface Source3 {
    url: string;
    width: number;
    height: number;
  }

  export interface Resolution3 {
    url: string;
    width: number;
    height: number;
  }

  export interface Mp4 {
    source: Source3;
    resolutions: Resolution3[];
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

  export interface SecureMediaEmbed {
    content: string;
    width?: number;
    scrolling?: boolean;
    media_domain_url: string;
    height?: number;
  }

  export interface Oembed2 {
    provider_url: string;
    version: string;
    title: string;
    author_name: string;
    height: number;
    width: number;
    html: string;
    thumbnail_width: number;
    provider_name: string;
    thumbnail_url: string;
    type: string;
    thumbnail_height: number;
    author_url: string;
    description: string;
    cache_age?: number;
  }

  export interface Media {
    type: string;
    oembed: Oembed2;
  }

  export interface Data2 {
    domain: string;
    approved_at_utc?: any;
    banned_by?: any;
    media_embed: MediaEmbed;
    thumbnail_width?: number;
    subreddit: string;
    selftext_html: string;
    selftext: string;
    likes?: any;
    suggested_sort: string;
    user_reports: any[];
    secure_media: SecureMedia;
    is_reddit_media_domain: boolean;
    link_flair_text: string;
    id: string;
    banned_at_utc?: any;
    view_count?: any;
    archived: boolean;
    clicked: boolean;
    report_reasons?: any;
    title: string;
    num_crossposts: number;
    saved: boolean;
    mod_reports: any[];
    can_mod_post: boolean;
    is_crosspostable: boolean;
    pinned: boolean;
    score: number;
    approved_by?: any;
    over_18: boolean;
    hidden: boolean;
    preview: Preview;
    thumbnail: string;
    subreddit_id: string;
    edited: any;
    link_flair_css_class: string;
    author_flair_css_class: string;
    contest_mode: boolean;
    gilded: number;
    downs: number;
    brand_safe: boolean;
    secure_media_embed: SecureMediaEmbed;
    removal_reason?: any;
    post_hint: string;
    author_flair_text: string;
    stickied: boolean;
    can_gild: boolean;
    thumbnail_height?: number;
    parent_whitelist_status: string;
    name: string;
    spoiler: boolean;
    permalink: string;
    subreddit_type: string;
    locked: boolean;
    hide_score: boolean;
    created: number;
    url: string;
    whitelist_status: string;
    quarantine: boolean;
    author: string;
    created_utc: number;
    subreddit_name_prefixed: string;
    ups: number;
    media: Media;
    num_comments: number;
    is_self: boolean;
    visited: boolean;
    num_reports?: any;
    is_video: boolean;
    distinguished?: any;
  }

  export interface Child {
    kind: string;
    data: Data2;
  }

  export interface Data {
    modhash: string;
    whitelist_status: string;
    children: Child[];
    after: string;
    before?: any;
  }

  export interface RootObject {
    kind: string;
    data: Data;
  }
}

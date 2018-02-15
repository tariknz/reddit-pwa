import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL_TOKEN } from '../common/tokens/base-url-token';
import { Listing } from './models/listing.model';
import { map } from 'rxjs/operators';
import { RedditResponse } from './models/reddit-listing-response.model';
import { SharerService } from '../widgets/sharer/sharer.service';
import { Comment } from './models/comment.model';

@Injectable()
export class ListingService {
  constructor(
    @Inject(BASE_URL_TOKEN) private baseUrl: string,
    private http: HttpClient,
  ) {}

  public get(after: string = '') {
    return this.http
      .get<RedditResponse.Listing>(
        `${this.baseUrl}.json?raw_json=1&after=${after}`,
      )
      .pipe(map(res => this.mapResponse(res)));
  }

  public getComments(
    listingId: string,
    subreddit: string,
    limit: number,
    after: string = '',
  ) {
    return this.http
      .get<RedditResponse.Listing[]>(
        `${
          this.baseUrl
        }/${subreddit}/comments/${listingId}.json?raw_json=1&limit=${limit}&after=${after}`,
      )
      .pipe(map(res => this.mapCommentsResponse(res)));
  }

  private mapResponse(response: RedditResponse.Listing): Listing[] {
    return response.data.children.map(c => {
      const mappedModel: Listing = {
        id: c.data.id,
        name: c.data.name,
        title: c.data.title,
        url: c.data.url,
        author: c.data.author,
        subreddit: c.data.subreddit_name_prefixed,
        score: c.data.score,
        numOfcomments: c.data.num_comments,
        comments: [],
      };

      const image = this.getImage(c.data);

      if (image) {
        mappedModel.previewImage = {
          url: image.url,
          width: image.width,
          height: image.height,
        };
      }

      if (c.data.preview && c.data.preview.reddit_video_preview) {
        const mediaPreview = c.data.preview.reddit_video_preview;
        mappedModel.media = {
          url: mediaPreview.fallback_url,
          isGif: mediaPreview.is_gif,
          enablePreview: false, // defaults to false until its in view
        };
      }

      return mappedModel;
    });
  }

  private getImage(data: RedditResponse.Data): RedditResponse.Resolution {
    // get first image
    if (!data.preview || !data.preview.images || !data.preview.images.length) {
      return undefined;
    }

    const images = data.preview.images;

    // get the 640 image resolution or the last (highest) available resolution
    const resolutions = images[0].resolutions;
    const image = resolutions[Math.min(resolutions.length - 1, 3)];

    return image;
  }

  private mapCommentsResponse(response: RedditResponse.Listing[]): Comment[] {
    if (!response.length) {
      return [];
    }

    return this.mapComments(response[1]);
  }

  private mapComments(listing: RedditResponse.Listing): Comment[] {
    if (
      !listing.data ||
      !listing.data.children ||
      !listing.data.children.length
    ) {
      return [];
    }

    const comments: Comment[] = listing.data.children
      .filter(c => c.kind !== 'more')
      .map(c => {
        return {
          id: c.data.id,
          body: c.data.body,
          score: c.data.score,
          createdOnUtc: c.data.created_utc,
          author: c.data.author,
          replies: this.mapComments(c.data.replies),
        };
      });

    return comments;
  }
}

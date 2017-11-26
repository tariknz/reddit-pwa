import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL_TOKEN } from '../common/tokens/base-url-token';
import { Listing } from './listing.model';
import { map } from 'rxjs/operators';

@Injectable()
export class ListingService {
  constructor(
    @Inject(BASE_URL_TOKEN) private baseUrl: string,
    private http: HttpClient
  ) {}

  public get(after: string = '') {
    return this.http
      .get<RedditResponseObject.RootObject>(
        `${this.baseUrl}.json?after=${after}`
      )
      .pipe(map((res => this.mapResponse(res))));
  }

  private mapResponse(response: RedditResponseObject.RootObject): Listing[] {
    console.log(response);

    return response.data.children.map(c => {
      return {
        title: c.data.title,
        url: c.data.url,
        author: c.data.author,
        subreddit: c.data.subreddit_name_prefixed,
        score: c.data.score,
        previewImageUrl: this.getImage(c.data)
      };
    });
  }

  private getImage(data: RedditResponseObject.Data2): string {
    // get first image
    if (!data.preview || !data.preview.images || !data.preview.images.length) {
      return undefined;
    }

    const images = data.preview.images;

    // get the 640 image resolution or the last (highest) available resolution
    const resolutions = images[0].resolutions;
    const image = resolutions[Math.min(resolutions.length - 1, 3)];

    return image.url;
  }
}

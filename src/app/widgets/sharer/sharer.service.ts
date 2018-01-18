import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { map } from 'rxjs/operators/map';

@Injectable()
export class SharerService {
  constructor() {}

  public canShare(): boolean {
    return !!navigator.share;
  }

  public share(title: string, text: string, url: string): Observable<void> {
    if (this.canShare()) {
      return fromPromise(
        navigator.share({
          title: title,
          text: text,
          url: url
        })
      ).pipe(map(() => undefined));
    } else {
      throw new Error('Navigator share API not enabled on this device');
    }
  }
}

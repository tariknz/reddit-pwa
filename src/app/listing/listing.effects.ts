import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { ListingService } from './listing.service';
import { ListingActionTypes, ListActionComplete, LoadFirstCommentsCompleteAction } from './listing.actions';
import { toPayload } from '@ngrx/effects';
import { map } from 'rxjs/operators/map';
import { switchMap } from 'rxjs/operators/switchMap';

@Injectable()
export class ListingEffects {
  @Effect()
  public list$: Observable<Action> = this.actions$
    .ofType(ListingActionTypes.LIST)
    .pipe(
      map(toPayload),
      switchMap((after: string) => {
        return this.service
          .get(after)
          .pipe(map(listings => new ListActionComplete(listings)));
      })
    );

    @Effect()
    public loadFirstComments$: Observable<Action> = this.actions$
      .ofType(ListingActionTypes.LOAD_FIRST_COMMENTS)
      .pipe(
        map(toPayload),
        switchMap((payload: { listingId: string, subreddit: string }) => {
          return this.service
            .getComments(payload.listingId, payload.subreddit, 2)
            .pipe(
              map(comments =>
                new LoadFirstCommentsCompleteAction({
                  listingId: payload.listingId,
                  comments
                })
            ));
        })
      );

  constructor(private actions$: Actions, private service: ListingService) {}
}

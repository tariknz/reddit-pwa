import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { ListingService } from './listing.service';
import {
  ListingActionTypes,
  ListActionComplete,
  LoadFirstCommentsCompleteAction,
  ListAction,
  LoadFirstCommentsAction,
} from './listing.actions';
import { ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators/map';
import { switchMap } from 'rxjs/operators/switchMap';

@Injectable()
export class ListingEffects {
  @Effect()
  public list$: Observable<Action> = this.actions$.pipe(
    ofType<ListAction>(ListingActionTypes.LIST),
    switchMap(after => {
      return this.service
        .get(after.payload)
        .pipe(map(listings => new ListActionComplete(listings)));
    }),
  );

  @Effect()
  public loadFirstComments$: Observable<Action> = this.actions$
    .ofType(ListingActionTypes.LOAD_FIRST_COMMENTS)
    .pipe(
      ofType<LoadFirstCommentsAction>(ListingActionTypes.LOAD_FIRST_COMMENTS),
      switchMap(action => {
        return this.service
          .getComments(action.payload.listingId, action.payload.subreddit, 2)
          .pipe(
            map(
              comments =>
                new LoadFirstCommentsCompleteAction({
                  listingId: action.payload.listingId,
                  comments,
                }),
            ),
          );
      }),
    );

  constructor(private actions$: Actions, private service: ListingService) {}
}

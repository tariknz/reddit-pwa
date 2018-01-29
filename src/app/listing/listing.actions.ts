import { Action } from '@ngrx/store';
import { Listing } from './models/listing.model';
import { Comment } from './models/comment.model';

export enum ListingActionTypes {
  LIST = '[Listing] List',
  LIST_COMPLETE = '[Listing] List Complete',
  LOAD_FIRST_COMMENTS = '[Listing] Load First Comments',
  LOAD_FIRST_COMMENTS_COMPLETE = '[Listing] Load First Comments Complete'
}

export class ListAction implements Action {
  readonly type = ListingActionTypes.LIST;

  constructor(public payload?: string) { }
}

export class LoadFirstCommentsAction implements Action {
  readonly type = ListingActionTypes.LOAD_FIRST_COMMENTS;

  constructor(public payload: { listingId: string, subreddit: string }) { }
}

export class LoadFirstCommentsCompleteAction implements Action {
  readonly type = ListingActionTypes.LOAD_FIRST_COMMENTS_COMPLETE;

  constructor(public payload: { listingId: string, comments: Comment[] }) { }
}

export class ListActionComplete implements Action {
  readonly type = ListingActionTypes.LIST_COMPLETE;

  constructor(public payload: Listing[]) { }
}

export type ListingActions =
  ListAction |
  ListActionComplete |
  LoadFirstCommentsAction |
  LoadFirstCommentsCompleteAction;

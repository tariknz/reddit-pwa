import { Action } from '@ngrx/store';
import { Listing } from './listing.model';

export enum ListingActionTypes {
  LIST = '[Listing] List',
  LIST_COMPLETE = '[Listing] List Complete',
}

export class ListAction implements Action {
  readonly type = ListingActionTypes.LIST;

  constructor(public payload?: string) { }
}

export class ListActionComplete implements Action {
  readonly type = ListingActionTypes.LIST_COMPLETE;

  constructor(public payload: Listing[]) { }
}

export type ListingActions =
  ListAction |
  ListActionComplete;

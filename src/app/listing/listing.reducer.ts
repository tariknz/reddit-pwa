import { Listing } from './listing.model';
import { ListingActions, ListingActionTypes } from './listing.actions';
import { createSelector } from '@ngrx/store/src/selector';

export interface ListingState {
  listings: Listing[];
  continuationToken: string;
}

export const initialState: ListingState = {
  listings: [],
  continuationToken: undefined
};

export function reducer(state = initialState, action: ListingActions) {
  switch (action.type) {
    case ListingActionTypes.LIST_COMPLETE:
      let lastItem: string;

      if (action.payload.length) {
        lastItem = action.payload[action.payload.length - 1].name;
      }

      return {
        ...state,
        listings: state.listings.concat(action.payload),
        continuationToken: lastItem
      };
    default:
      return state;
  }
}

export const getListings = (state: ListingState) => state.listings;
export const getContinuationToken = (state: ListingState) => state.continuationToken;

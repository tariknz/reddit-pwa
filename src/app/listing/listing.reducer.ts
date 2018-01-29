import { Listing } from './models/listing.model';
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
        lastItem = action.payload[action.payload.length - 1].id;
      }

      return {
        ...state,
        listings: state.listings.concat(action.payload),
        continuationToken: lastItem
      };
    case ListingActionTypes.LOAD_FIRST_COMMENTS_COMPLETE:
      const listingIndex = state.listings.findIndex(l => l.id === action.payload.listingId);
      const listing = state.listings[listingIndex];

      listing.comments = action.payload.comments;

      return {
        ...state,
        listings: [
          ...state.listings.slice(0, listingIndex - 1),
          { ...listing },
          ...state.listings.slice(listingIndex + 1),
        ]
      };
    default:
      return state;
  }
}

export const getListings = (state: ListingState) => state.listings;
export const getContinuationToken = (state: ListingState) => state.continuationToken;

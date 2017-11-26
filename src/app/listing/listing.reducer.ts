import { Listing } from './listing.model';
import { ListingActions, ListingActionTypes } from './listing.actions';
import { createSelector } from '@ngrx/store/src/selector';

export interface ListingState {
  listings: Listing[];
}

export const initialState: ListingState = {
  listings: []
};

export function reducer(state = initialState, action: ListingActions) {
  switch (action.type) {
    case ListingActionTypes.LIST_COMPLETE:
      return { ...state, listings: action.payload };
    default:
      return state;
  }
}

export const getListings = (state: ListingState) => state.listings;

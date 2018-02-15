import * as fromRouter from '@ngrx/router-store';
import { MetaReducer, ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { logger } from './logger';
import { ListingState } from '../listing/listing.reducer';
import { createSelector } from '@ngrx/store';

export interface StoreState {
  routerReducer: fromRouter.RouterReducerState;
}

export const metaReducers: MetaReducer<StoreState>[] = !environment.production ? [ logger ] : [];

export const reducers: ActionReducerMap<StoreState> = {
  routerReducer: fromRouter.routerReducer
};

export const getListingsState = createFeatureSelector<ListingState>('listingState');
export const getListings = createSelector(getListingsState, (state) => state.listings);
export const getContinuationToken = createSelector(getListingsState, (state) => state.continuationToken);

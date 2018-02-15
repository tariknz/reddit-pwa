import { ActionReducer } from '@ngrx/store';
import { StoreState } from './';

// console.debug all actions
export function logger(reducer: ActionReducer<StoreState>): ActionReducer<StoreState> {
  // tslint:disable:no-console
  return function(state: StoreState, action: any): StoreState {
    console.debug('state', state);
    console.debug('action', action);

    return reducer(state, action);
  };
}

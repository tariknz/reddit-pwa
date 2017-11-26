import { ActionReducer } from '@ngrx/store';
import { StoreState } from './';

// console.log all actions
export function logger(reducer: ActionReducer<StoreState>): ActionReducer<StoreState> {
  return function(state: StoreState, action: any): StoreState {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

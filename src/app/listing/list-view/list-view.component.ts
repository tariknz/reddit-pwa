import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Listing } from '../listing.model';
import { Observable } from 'rxjs/Observable';
import { ListAction } from '../listing.actions';
import { StoreState, getListings } from '../../store';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {
  public listing$: Observable<Listing[]>;

  constructor(private store: Store<StoreState>) {
    this.listing$ = this.store.select(getListings);
  }

  public ngOnInit() {
    this.store.dispatch(new ListAction());
  }
}

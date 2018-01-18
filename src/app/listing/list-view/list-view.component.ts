import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Listing } from '../listing.model';
import { Observable } from 'rxjs/Observable';
import { ListAction } from '../listing.actions';
import { StoreState, getListings, getContinuationToken } from '../../store';
import { SharerService } from '../../widgets/sharer/sharer.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: [ './list-view.component.scss' ]
})
export class ListViewComponent implements OnInit {
  public listing$: Observable<Listing[]>;
  public token: string;

  constructor(private store: Store<StoreState>, private sharer: SharerService) {
    this.listing$ = this.store.select(getListings);
    this.store.select(getContinuationToken).subscribe((token) => (this.token = token));
  }

  public ngOnInit() {
    this.store.dispatch(new ListAction());
  }

  public loadMore() {
    this.store.dispatch(new ListAction(this.token));
  }

  public share(listing: Listing) {
    if (this.sharer.canShare()) {
      this.sharer.share(listing.title, listing.subreddit, listing.url).subscribe();
    } else {
      console.log('browser does not support sharing API');
    }
  }

  public openLink(url: string) {
    window.open(url, 'new');
  }
}

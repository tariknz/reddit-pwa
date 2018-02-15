import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Listing } from '../models/listing.model';
import { Observable } from 'rxjs/Observable';
import { ListAction, LoadFirstCommentsAction } from '../listing.actions';
import { StoreState, getListings, getContinuationToken } from '../../store';
import { SharerService } from '../../widgets/sharer/sharer.service';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss'],
})
export class ListViewComponent implements OnInit {
  public listing$: Observable<Listing[]>;
  public token: string;

  @ViewChild('viewport') public viewport: ElementRef;

  constructor(private store: Store<StoreState>, public sharer: SharerService) {
    this.listing$ = this.store.select(getListings);
    this.store
      .select(getContinuationToken)
      .subscribe(token => (this.token = token));
  }

  public ngOnInit() {
    this.store.dispatch(new ListAction());
  }

  public loadMore() {
    console.log(this.token);
    this.store.dispatch(new ListAction(this.token));
  }

  public share(listing: Listing) {
    if (this.sharer.canShare()) {
      this.sharer.share(listing.title, undefined, listing.url).subscribe();
    } else {
      console.log('browser does not support sharing API');
    }
  }

  public openLink(url: string) {
    window.open(url, 'new');
  }

  public onItemInView(listing: Listing) {
    if (!listing.comments.length) {
      this.store.dispatch(
        new LoadFirstCommentsAction({
          listingId: listing.id,
          subreddit: listing.subreddit,
        }),
      );
    }

    // switch to the video view
    if (listing.media) {
      listing.media.enablePreview = true;
    }
  }
}

import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { ListViewComponent } from './list-view.component';
import { Component } from '@angular/core';
import { Store, StoreModule, combineReducers } from '@ngrx/store';
import * as fromRoot from '../../store';
import * as fromListing from './../listing.reducer';
import { ListAction, ListActionComplete, ListingActionTypes } from '../listing.actions';
import { Listing } from '../listing.model';
import { reducers, metaReducers } from '../../store/index';
import { By } from '@angular/platform-browser';
import { first } from 'rxjs/operators/first';
import { VirtualScrollerModule } from '../../widgets/virtual-scroller/virtual-scroller.module';

@Component({
  selector: 'app-item-view',
  template: '<ng-content></ng-content>'
})
class MockItemViewComponent {}

describe('ListViewComponent', () => {
  let component: ListViewComponent;
  let fixture: ComponentFixture<ListViewComponent>;
  let store: Store<fromListing.ListingState>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({ ...fromRoot.reducers }, { metaReducers }),
        StoreModule.forFeature('listingState', fromListing.reducer),
        VirtualScrollerModule
      ],
      declarations: [ ListViewComponent, MockItemViewComponent ]
    });

    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();

    fixture = TestBed.createComponent(ListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load listings on init', () => {
    component.ngOnInit();
    expect(store.dispatch).toHaveBeenCalledWith(new ListAction());
  });

  it('should display listings from store', () => {
    // mock listings
    const listings: Listing[] = [
      {
        name: '',
        numOfcomments: 1,
        author: 'test',
        title: 'test title',
        score: 0,
        subreddit: '',
        previewImageUrl: '',
        url: ''
      },
      {
        name: '',
        numOfcomments: 1,
        author: 'test 2',
        title: 'test title 2',
        score: 0,
        subreddit: '',
        previewImageUrl: '',
        url: ''
      }
    ];

    // dispatch to store mock data
    store.dispatch(new ListActionComplete(listings));

    component.listing$.pipe(first()).subscribe((data) => {
      expect(data.length).toBe(listings.length, 'Listings observable was not updated to the listings dispatched');
    });

    fixture.detectChanges();

    const el = fixture.debugElement.queryAll(By.css('app-item-view'));

    // check listings were rendered
    // expect(el.length).toBe(listings.length, 'Not all listings were rendered correctly');

    const firstItem = el[0].query(By.css('[appItemViewTitle]')).nativeElement;

    // check title of listing was rendered
    expect(firstItem.textContent).toMatch('test title', 'Title of listing was not rendered properly');
  });
});

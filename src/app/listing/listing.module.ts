import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListingRoutingModule } from './listing-routing.module';
import { StoreModule } from '@ngrx/store';
import { reducer } from './listing.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ListingEffects } from './listing.effects';
import { ListingService } from './listing.service';
import { ListViewComponent } from './list-view/list-view.component';
import { ItemViewModule } from '../widgets/item-view/item-view.module';
import { VirtualScrollerModule } from '../widgets/virtual-scroller/virtual-scroller.module';
import { MatIconModule } from '@angular/material';
import { ScrollParasiteModule } from '../widgets/scroll-parasite/scroll-parasite.module';
import { SharerModule } from '../widgets/sharer/sharer.module';

@NgModule({
  imports: [
    CommonModule,
    ListingRoutingModule,
    StoreModule.forFeature('listingState', reducer),
    ItemViewModule,
    EffectsModule.forFeature([
      ListingEffects,
    ]),
    VirtualScrollerModule,
    MatIconModule,
    ScrollParasiteModule,
    SharerModule
  ],
  declarations: [
    ListViewComponent
  ],
  providers: [
    ListingService
  ]
})
export class ListingModule { }

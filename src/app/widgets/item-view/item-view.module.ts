import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material';
import {
  ItemViewComponent, ItemViewAuthorDirective,
  ItemViewImageDirective, ItemViewTitleDirective, ItemViewVotesDirective, ItemViewCommentsDirective
} from './item-view.component';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    ItemViewComponent,
    ItemViewAuthorDirective,
    ItemViewImageDirective,
    ItemViewTitleDirective,
    ItemViewImageDirective,
    ItemViewVotesDirective,
    ItemViewCommentsDirective,
  ],
  declarations: [
    ItemViewComponent,
    ItemViewAuthorDirective,
    ItemViewImageDirective,
    ItemViewTitleDirective,
    ItemViewImageDirective,
    ItemViewVotesDirective,
    ItemViewCommentsDirective,
  ]
})
export class ItemViewModule { }

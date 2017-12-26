import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material';
import {
  ItemViewComponent, ItemViewAuthorDirective,
  ItemViewImageDirective, ItemViewTitleDirective, ItemViewVotesDirective
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
    ItemViewVotesDirective
  ],
  declarations: [
    ItemViewComponent,
    ItemViewAuthorDirective,
    ItemViewImageDirective,
    ItemViewTitleDirective,
    ItemViewImageDirective,
    ItemViewVotesDirective
  ]
})
export class ItemViewModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemViewActionsDirective } from './item-view.component';
import {
  ItemViewComponent, ItemViewAuthorDirective,
  ItemViewImageDirective, ItemViewTitleDirective, ItemViewVotesDirective, ItemViewCommentsDirective
} from './item-view.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ItemViewComponent,
    ItemViewAuthorDirective,
    ItemViewImageDirective,
    ItemViewTitleDirective,
    ItemViewImageDirective,
    ItemViewVotesDirective,
    ItemViewCommentsDirective,
    ItemViewActionsDirective
  ],
  declarations: [
    ItemViewComponent,
    ItemViewAuthorDirective,
    ItemViewImageDirective,
    ItemViewTitleDirective,
    ItemViewImageDirective,
    ItemViewVotesDirective,
    ItemViewCommentsDirective,
    ItemViewActionsDirective
  ]
})
export class ItemViewModule { }

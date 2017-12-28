import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VirtualScrollerComponent } from './virtual-scroller.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [VirtualScrollerComponent],
  exports: [VirtualScrollerComponent]
})
export class VirtualScrollerModule { }

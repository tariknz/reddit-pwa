import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InViewDirective } from './in-view.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [InViewDirective],
  exports: [InViewDirective]
})
export class InViewModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollParasiteDirective } from './scroll-parasite.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ScrollParasiteDirective],
  exports: [ScrollParasiteDirective],
})
export class ScrollParasiteModule {}

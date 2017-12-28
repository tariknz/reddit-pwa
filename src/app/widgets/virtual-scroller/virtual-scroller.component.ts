import { Component, ContentChild, OnInit, QueryList, TemplateRef } from '@angular/core';
import { Input } from '@angular/core';
import { HostListener } from '@angular/core';
import { ElementRef } from '@angular/core';
import { ChangeDetectionStrategy, OnChanges } from '@angular/core';
import { ContentChildren } from '@angular/core';
import { HostBinding } from '@angular/core';

@Component({
  selector: 'app-virtual-scroller',
  templateUrl: './virtual-scroller.component.html',
  styleUrls: ['./virtual-scroller.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VirtualScrollerComponent implements OnChanges {

  @Input() public items: any[] = [];
  @ContentChild(TemplateRef) public currentItem;
  @ContentChildren('contentItem') public children: QueryList<ElementRef>;

  @HostBinding('style.height') public hostHeight: string;

  public visibleItems: any[] = [];
  public topPosition = 0;

  private startIndex = 0;
  private endIndex = 3;

  private itemHeight = 800;

  constructor(private element: ElementRef) { }

  public ngOnChanges() {
    this.calculateVisibleItems();
  }

  @HostListener('scroll', ['$event'])
  public onScrollHandler(_: Event) {
    this.calculateVisibleItems();
  }

  private calculateVisibleItems() {
    const scrollTop = this.element.nativeElement.scrollTop;
    const elements = this.items.length;
    const viewHeight = this.element.nativeElement.offsetHeight;

    if (this.children && this.children.first) {
      this.itemHeight = this.children.first.nativeElement.clientHeight || this.itemHeight;
    }

    console.log('itemHeight', this.itemHeight);
    console.log('viewHeight', viewHeight);

    const firstItem = Math.floor(scrollTop / this.itemHeight);
    let lastItem = firstItem + Math.ceil(viewHeight / this.itemHeight) + 1;

    if (lastItem + 1 >= this.items.length) { lastItem = this.items.length - 1; }

    this.topPosition = firstItem * this.itemHeight;
    this.startIndex = firstItem;
    this.endIndex = lastItem;

    // when i comment out this line scroll events work
    //this.hostHeight = (this.items.length * this.itemHeight) + 'px';

    console.log(scrollTop);
    console.log(this.children);
    console.log('viewing items ' + firstItem + ' to ' + lastItem);

    console.log(this.hostHeight);

    this.updateVisibleItems();
  }

  private updateVisibleItems() {
    this.visibleItems = this.items.slice(this.startIndex, this.endIndex);
  }
}

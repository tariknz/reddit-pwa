import {
  Component,
  HostListener,
  ContentChild,
  EventEmitter,
  OnInit,
  QueryList,
  TemplateRef,
  Output,
  Input,
  ElementRef,
  ChangeDetectionStrategy,
  OnChanges,
  ContentChildren,
  HostBinding,
  ViewChild
} from '@angular/core';

import { distinct } from 'rxjs/operators/distinct';
import { scan } from 'rxjs/operators/scan';
import { debounceTime } from 'rxjs/operators/debounceTime';
import { throttleTime } from 'rxjs/operators/throttleTime';

@Component({
  selector: 'app-virtual-scroller',
  templateUrl: './virtual-scroller.component.html',
  styleUrls: [ './virtual-scroller.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VirtualScrollerComponent implements OnChanges, OnInit {
  @Input() public items: any[] = [];

  @ViewChild('scrollableArea') public scrollableArea: ElementRef;

  @ContentChild(TemplateRef) public currentItem;
  @ContentChildren('contentItem') public children: QueryList<ElementRef>;

  @Output() public loadMore = new EventEmitter<void>();

  public runwayHeight = 10000;
  public visibleItems: any[] = [];
  public topPosition = 0;
  public onScroll$ = new EventEmitter();

  private readonly DEFAULT_HEIGHT = 800;
  private readonly START_OFFSET = -1;
  private readonly END_OFFSET = 4;

  private startIndex = 0;
  private endIndex = this.startIndex + this.END_OFFSET;

  private heightAppenderStack: number[] = [];
  private childHeight$ = new EventEmitter<number>();

  private averageHeight = () =>
    this.heightAppenderStack.reduce((a, b) => a + b, 0) / this.heightAppenderStack.length || this.DEFAULT_HEIGHT;

  constructor() {}

  public ngOnInit() {
    this.updateVisibleItems();

    this.childHeight$.pipe(distinct()).subscribe((height) => {
      this.heightAppenderStack.push(height);
      this.runwayHeight = this.items.length * this.averageHeight();
    });

    this.onScroll$.pipe(throttleTime(100)).subscribe(() => this.calculateVisibleItems());
  }

  public ngOnChanges() {
    this.calculateVisibleItems();
    this.runwayHeight = this.items.length * this.averageHeight();
  }

  private calculateVisibleItems(): void {
    const scrollTop = this.scrollableArea.nativeElement.scrollTop;
    const elements = this.items.length;

    if (this.children && this.children.first) {
      const itemHeight = this.children.first.nativeElement.clientHeight;
      if (itemHeight) {
        this.childHeight$.emit(itemHeight);
      }
    }

    let firstItem = Math.floor(scrollTop / this.averageHeight());
    let lastItem = firstItem + this.END_OFFSET;

    if (firstItem < 0) {
      firstItem = 0;
    }
    if (lastItem >= this.items.length - 1) {
      lastItem = this.items.length - 1;
    }

    this.startIndex = firstItem + this.START_OFFSET <= 0 ? 0 : firstItem + this.START_OFFSET;
    this.endIndex = lastItem;
    this.topPosition = this.startIndex * this.averageHeight();

    this.updateVisibleItems();
  }

  private updateVisibleItems(): void {
    this.visibleItems = this.items.slice(this.startIndex, this.endIndex);

    if (this.endIndex >= this.items.length - 1) {
      this.loadMore.emit();
    }
  }
}

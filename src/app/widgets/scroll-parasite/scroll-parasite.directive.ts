import { OnDestroy, Directive, HostListener, ElementRef, Renderer2, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { pairwise } from 'rxjs/operators/pairwise';
import { map } from 'rxjs/operators/map';
import { filter } from 'rxjs/operators';
import { distinct } from 'rxjs/operators/distinct';

@Directive({
  selector: '[appScrollParasite]'
})
export class ScrollParasiteDirective implements OnInit, OnDestroy {
  // number of pixels near the bottom until the event is fired
  @Output('reachedBottom') public reachedBottom = new EventEmitter<void>();

  public scrollBuffer = 300;
  private scrollEvent = new EventEmitter<void>();
  private scrollSub: Subscription;

  @HostListener('scroll')
  public onScroll(ev: any) {
    this.scrollEvent.next();
  }

  constructor(private el: ElementRef) { }

  public ngOnInit() {
    this.scrollSub = this.scrollEvent
      .pipe(
        map(() => this.el.nativeElement.scrollTop as number),
        pairwise(),
        filter((positions) => positions[0] < positions[1]), // is scrolling down
        map((positions) => positions[1]),
        filter((lastPos) => lastPos > this.el.nativeElement.scrollHeight - this.el.nativeElement.clientHeight * 2), // is at the bottom!
        map(() => this.el.nativeElement.scrollHeight),
        distinct()
      )
      .subscribe((res) => this.reachedBottom.next());
  }

  public ngOnDestroy() {
    if (this.scrollSub) {
      this.scrollSub.unsubscribe();
    }
  }
}

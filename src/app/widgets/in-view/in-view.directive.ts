import { ElementRef, Output, Directive, EventEmitter, OnInit } from '@angular/core';

@Directive({
  selector: '[appInView]'
})
export class InViewDirective implements OnInit {
  @Output() public itemInView = new EventEmitter<void>();

  constructor(private el: ElementRef) {}

  public ngOnInit() {
    const observer = new IntersectionObserver(
      (ev) => {
        // TODO: Currently Angular AOT does not recognise IntersectionObserverEntry type to have that property
        if ((ev[0] as any).isIntersecting) {
          this.itemInView.next();
        }
      },
      {
        rootMargin: '0px',
        threshold: 0.2
      }
    );

    observer.observe(this.el.nativeElement);
  }
}

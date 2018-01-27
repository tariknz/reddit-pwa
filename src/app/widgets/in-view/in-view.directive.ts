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
        if (ev[0].isIntersecting) {
          this.itemInView.next();
        }
      },
      {
        rootMargin: '0px',
        threshold: 1.0
      }
    );

    observer.observe(this.el.nativeElement);
  }
}

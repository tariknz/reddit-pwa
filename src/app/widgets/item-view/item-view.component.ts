import { Component, OnInit } from '@angular/core';
import { Directive, ViewEncapsulation, HostBinding, ChangeDetectionStrategy } from '@angular/core';

@Directive({
  selector: '[appItemViewAuthor]',
})
export class ItemViewAuthorDirective {
  @HostBinding('class') classes = 'author';
}

@Directive({
  selector: '[appItemViewImage]',
})
export class ItemViewImageDirective {
  @HostBinding('class') classes = 'image';
}

@Directive({
  selector: '[appItemViewTitle]',
})
export class ItemViewTitleDirective {
  @HostBinding('class') classes = 'title';
}

@Directive({
  selector: '[appItemViewVotes]',
})
export class ItemViewVotesDirective {
  @HostBinding('class') classes = 'votes';
}

@Directive({
  selector: '[appItemViewComments]',
})
export class ItemViewCommentsDirective {
  @HostBinding('class') classes = 'comments';
}

@Directive({
  selector: '[appItemViewActions]',
})
export class ItemViewActionsDirective {
  @HostBinding('class') classes = 'actions';
}

@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class ItemViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

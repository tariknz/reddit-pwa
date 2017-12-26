import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemViewComponent } from './item-view.component';
import { MatIconModule } from '@angular/material';

describe('ItemViewComponent', () => {
  let component: ItemViewComponent;
  let fixture: ComponentFixture<ItemViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatIconModule],
      declarations: [ItemViewComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

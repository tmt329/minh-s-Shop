import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemToBuyComponent } from './item-to-buy.component';

describe('ItemToBuyComponent', () => {
  let component: ItemToBuyComponent;
  let fixture: ComponentFixture<ItemToBuyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemToBuyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemToBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

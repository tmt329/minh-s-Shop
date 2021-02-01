import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenCollectionComponent } from './women-collection.component';

describe('WomenCollectionComponent', () => {
  let component: WomenCollectionComponent;
  let fixture: ComponentFixture<WomenCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomenCollectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WomenCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

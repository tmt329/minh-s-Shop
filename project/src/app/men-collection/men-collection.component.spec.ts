import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenCollectionComponent } from './men-collection.component';

describe('MenCollectionComponent', () => {
  let component: MenCollectionComponent;
  let fixture: ComponentFixture<MenCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenCollectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

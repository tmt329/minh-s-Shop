import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidCollectionComponent } from './kid-collection.component';

describe('KidCollectionComponent', () => {
  let component: KidCollectionComponent;
  let fixture: ComponentFixture<KidCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KidCollectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KidCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

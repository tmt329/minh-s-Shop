import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountingAnimationComponent } from './counting-animation.component';

describe('CountingAnimationComponent', () => {
  let component: CountingAnimationComponent;
  let fixture: ComponentFixture<CountingAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountingAnimationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountingAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

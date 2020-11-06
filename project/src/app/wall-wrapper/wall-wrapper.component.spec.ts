import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WallWrapperComponent } from './wall-wrapper.component';

describe('WallWrapperComponent', () => {
  let component: WallWrapperComponent;
  let fixture: ComponentFixture<WallWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WallWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WallWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReducerComponent } from './reducer-component';

describe('ReducerComponent', () => {
  let component: ReducerComponent;
  let fixture: ComponentFixture<ReducerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReducerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ReducerComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

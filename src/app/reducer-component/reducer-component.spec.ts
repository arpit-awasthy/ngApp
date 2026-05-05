import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReducerComponent } from './reducer-component';
import { count } from 'rxjs';
import { createReducer, on } from '@ngrx/store';

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

  // export interface State {
  //   count: number;
  // }

  // export const initialCount: State = {
  //   count: 0,
  // };

  // export const reducerCount = createReducer(
  //   initialCount,
  //   on(incrementAction, (state) => {
  //     ...state,
  //     count: state.count + 1,
  //   }),
  // );

});

// export const countReducer = createReducer(
//  initialCount,
//  on(incrementState, (state) => {
//     ...state,
//     count: state.count + 1
//  })
// );

import { Component } from '@angular/core';
import { createReducer, on } from '@ngrx/store';

@Component({
  selector: 'app-reducer-component',
  imports: [],
  templateUrl: './reducer-component.html',
  styleUrl: './reducer-component.scss',
})
export class ReducerComponent {
  
}

export interface State  {
  count: number;
}

export const initialState: State = {
  count: 0
}

export const countReducer = createReducer(
  initialState,
  // on(increment, 
  //   state => {
  //   ...state,
  //   count: state.count + 1
  // }),
  // on(decrement, 
  //   state => {
  //     ...state,
  //     count: state.count - 1
  // }),
  // on(reset, 
  //   state => {
  //     ...state,
  //     count: 0
  //   })
);

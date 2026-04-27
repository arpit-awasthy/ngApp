import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'form', loadComponent: () => import('./form/form').then((c) => c.Form) },
  {
    path: 'practice',
    loadComponent: () =>
      import('./practice-component/practice-component').then((c) => c.PracticeComponent),
  },
  {
    path: 'httpCall',
    loadComponent: () =>
      import('./http-call-component/http-call-component').then((c) => c.HttpCallComponent),
  },
  {
    path: 'reducer',
    loadComponent: () =>
      import('./reducer-component/reducer-component').then((c) => c.ReducerComponent),
  },
];

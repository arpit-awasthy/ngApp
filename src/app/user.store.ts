// import { Injectable } from "@angular/core";

// interface State {
//   users: any[];
//   loading: boolean;
// }

// @Injectable()
// export class UserStore extends ComponentStore<State> {

//   constructor() {
//     super({ users: [], loading: false });
//   }

//   readonly users$ = this.select(state => state.users);

//   readonly setUsers = this.updater((state, users) => ({
//   ...state,
//   users
// }));

// readonly loadUsers = this.effect(() =>
//   this.api.getUsers().pipe(
//     tap(users => this.setUsers(users))
//   )
// );


// }
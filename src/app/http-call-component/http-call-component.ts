import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, effect, inject, OnInit, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Observable, shareReplay, timer } from 'rxjs';
import { AppService } from '../app-service';
// import { UserStore } from '../user.store';

export interface State {
  users: any[];
  loading: boolean;
}

@Component({
  selector: 'app-http-call-component',
  imports: [CommonModule],
  providers: [AppService],
  templateUrl: './http-call-component.html',
  styleUrl: './http-call-component.scss',
})
export class HttpCallComponent implements OnInit {
  // private userStore = inject(UserStore);
  title = signal("Http-call");
  private _httpClient = inject(HttpClient);
  private _appService = inject(AppService);
  // private _cdr = inject(ChangeDetectorRef);
  private readonly url = 'https://jsonplaceholder.typicode.com/users';
  users: any[] = [];

  users$!: Observable<any[]>;
  // usersData = toSignal<any>(this.getAPICall());
  usersData = toSignal<any[]>(this._appService.getUser());

  ngOnInit(): void {

    // effect(() => {
    //     console.log('count', JSON.stringify(this.title()));
    // });

    //  this.userStore.loadUsers();

    this.users$ = this._appService.getUser();
    // this._httpClient.get<any[]>(this.url).subscribe((users: any[]) => {
    //   this.users = users;
    //   this._cdr.detectChanges();
    // });
    // this.users$ = this.getAPICall();



    

    // setInterval(() => {
    //   console.log('jagga');
    //   this.getAPICall().subscribe((users: any[]) => {
    //     users.forEach((it: any) => {
    //       console.log(it.name);
    //     });
    //   });
    // }, 2 * 1000);

    timer(1 * 1000).subscribe(() => {
      console.log("From Http-call component");
    });

    // this.users$.subscribe((users: any[]) => {
    //   users.forEach((it: any) => {
    //     console.log(it.name);
    //   })
    // });
  }

    ngOnDestroy() {
    console.log('ngOnDestroy of Http-call component');
  }

  callAPI() {
    console.log('calling API');
    //  this.users$ = this._appService.getUser();
    this.usersData = toSignal<any[]>(this._appService.getUser());
  }

  getAPICall(): Observable<any[]> {
    return this._httpClient.get<any[]>(this.url).pipe(
      shareReplay({
        bufferSize: 1,
        refCount: true,
      }),
    );
  }
}

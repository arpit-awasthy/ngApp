import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Observable, shareReplay, timer } from 'rxjs';

@Component({
  selector: 'app-http-call-component',
  imports: [CommonModule],
  templateUrl: './http-call-component.html',
  styleUrl: './http-call-component.scss',
})
export class HttpCallComponent implements OnInit {
  private _httpClient = inject(HttpClient);
  // private _cdr = inject(ChangeDetectorRef);
  private readonly url = 'https://jsonplaceholder.typicode.com/users';
  users: any[] = [];

  users$!: Observable<any[]>;
  usersData = toSignal<any>(this.getAPICall());

  ngOnInit(): void {
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

    timer(1 * 1000).pipe();

    // this.users$.subscribe((users: any[]) => {
    //   users.forEach((it: any) => {
    //     console.log(it.name);
    //   })
    // });
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

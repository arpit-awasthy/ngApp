import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

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

  ngOnInit(): void {
    // this._httpClient.get<any[]>(this.url).subscribe((users: any[]) => {
    //   this.users = users;
    //   this._cdr.detectChanges();
    // });
    this.users$ = this._httpClient.get<any[]>(this.url);

    this.users$.subscribe((users: any[]) => {
      users.forEach((it: any) => {
        console.log(it.name);
      })
    });
  }
}

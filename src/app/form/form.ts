import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { catchError, debounceTime, distinctUntilChanged, finalize, Observable, of, retry, shareReplay, single, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form.html',
  styleUrl: './form.scss',
})
export class Form implements OnInit {

  isArray = Array.isArray;
  isLoading = signal(false)

  private _httpClient = inject(HttpClient);

  search: FormControl = new FormControl('');
  postData$!: Observable<any>;

  ngOnInit(): void {
    this.postData$ = this.search.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.isLoading.set(true)),
      switchMap(it => 
        this._httpClient.get<any>(`https://jsonplaceholder.typicode.com/posts/${it}`).pipe(
          retry(2),
          catchError(() => of([])),
          finalize(() => this.isLoading.set(false))
        )
      ),
      shareReplay(1)
    );
  }
}

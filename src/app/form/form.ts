import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { catchError, debounceTime, distinctUntilChanged, Observable, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form.html',
  styleUrl: './form.scss',
})
export class Form implements OnInit {

  isArray = Array.isArray;

  private _httpClient = inject(HttpClient);

  name: FormControl = new FormControl('');
  postData$!: Observable<any>;

  ngOnInit(): void {
    this.postData$ = this.name.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(it => this._httpClient.get<any>(`https://jsonplaceholder.typicode.com/posts/${it}`)),
      catchError(() => of([]))
    );
  }
}

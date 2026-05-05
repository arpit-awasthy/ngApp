import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
// import { validate } from '@angular/forms/signals';
import { catchError, debounceTime, distinctUntilChanged, finalize, Observable, of, retry, shareReplay, single, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form.html',
  styleUrl: './form.scss',
})
export class Form {

  isArray = Array.isArray;
  isLoading = signal(false)

  private _httpClient = inject(HttpClient);

  search: FormControl = new FormControl('');
  postData$!: Observable<any>;

  registration = new FormGroup({
    name: new FormControl('Arpit', Validators.required),
    age:  new FormControl(35, Validators.required),
    uSkills: new FormArray([
      new FormControl('Angular'),
      new FormControl('NgRx')
    ])
  });

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

    this.registration.get('name')?.valueChanges.subscribe((value: any) => {
      console.log(value);
    })
  }

  ngSubmit()  {
    console.log(this.registration.valid, this.registration.value);
  }

  get skills() {
    const fieldName: string = 'uSkills'
    return this.registration.get(fieldName) as FormArray;
  }
}

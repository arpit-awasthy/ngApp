import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, computed, inject, signal } from '@angular/core';
import { distinctUntilChanged, Observable, of, Subject } from 'rxjs';
import { ChildComponent } from '../child-component/child-component';

@Component({
  selector: 'app-practice-component',
  imports: [CommonModule, ChildComponent],
  templateUrl: './practice-component.html',
  styleUrl: './practice-component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PracticeComponent {
  
  private arr: number[] = [1, 2, 3, 4];

  obs$ = new Observable((observer) => {
    observer.next(Math.random())
  });

  age = signal<number>(35);
  ageUpdate = computed<number>(() => this.age() * 2);

  obser$ = new Observable((observer) => {
    observer.next(Math.random());
  });

  sub$ = new Subject();

  ngOnInit()  {

    this.obser$.subscribe((res) => {
      console.log(`obser1 ${res}`)
    });

    this.obser$.subscribe((res) => {
      console.log(`obser2 ${res}`)
    });

    this.sub$.subscribe((res) => {
      console.log(`res1 ${res}`)
    });

    this.sub$.subscribe((res) => {
      console.log(`res2 ${res}`)
    });

    this.sub$.next(Math.random());

    // console.log('Practice component');
    console.log(this.arr.map(it => it * 2));

    setTimeout(() => {
      this.age.set(40);
    }, 2 * 1000);

    setTimeout(() => {
      this.age.update((it) => it * 2);
    }, 4 * 1000);

    // Array.prototype.arpitMap = function(callback) {
    //   let result = [];
    // }

    console.log(this.dataType<number>(100));

    console.log(this.identity<string>("Hello"));

    of(1, 1, 2, 2, 3, 2).pipe(
      distinctUntilChanged()
    ).subscribe((it) => {
      console.log(`distinctUntilChanged - ${it}`);
    })
    // Output: 1, 2, 3

    this.obs$.subscribe((success) => {
      console.log('Jagga aa gya ', success);
    })
  }

  dataType<T>(val: T): T  {
    return val;
  }

  identity<T>(value:T):T{
    return value;
  }
  
  outputEmitFromChild(event: boolean) {
    console.log(event)
  }
}

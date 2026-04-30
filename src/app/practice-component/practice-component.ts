import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-practice-component',
  imports: [CommonModule],
  templateUrl: './practice-component.html',
  styleUrl: './practice-component.scss',
})
export class PracticeComponent {

  private arr: number[] = [1, 2, 3, 4];

  age = signal<number>(35);
  ageUpdate = computed<number>(() => this.age() * 2)      

  ngOnInit()  {
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
  }

  dataType<T>(val: T): T  {
    return val;
  }

  identity<T>(value:T):T{
    return value;
  }
  
}

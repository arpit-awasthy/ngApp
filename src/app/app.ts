import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ngApp');
  
  ngOnInit()  {
    let value:unknown;

    // value="hello";
    // value=123;
    // value=true;
    value=undefined;

    let x:unknown="hi";

    // x.toUpperCase(); //
  }
}

export interface Iclass {
  schoolClass: number | string;
}

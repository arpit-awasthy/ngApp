import { Component, EventEmitter, Input, Output } from '@angular/core';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-child-component',
  imports: [],
  templateUrl: './child-component.html',
  styleUrl: './child-component.scss',
})
export class ChildComponent {
  @Input() name: string = '';

  @Output() actionEmit = new EventEmitter<boolean>(false);
  
  ngOnInit()  {
    setTimeout(() => {
        this.actionEmit.emit(false);
    }, 5 * 1000);
  }
}

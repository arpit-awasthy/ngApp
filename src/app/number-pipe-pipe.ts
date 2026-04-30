import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberPipe',
})
export class NumberPipePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}

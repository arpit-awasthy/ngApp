import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'stringPipe'
})
export class stringPipe implements PipeTransform   {

    transform(input: any)    {
        return input.toString();
    }
}
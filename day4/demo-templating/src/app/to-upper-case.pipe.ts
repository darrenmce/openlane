import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toUpperCase'
})
export class ToUpperCasePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value && value.toUpperCase) {
      return value.toUpperCase();
    }

    return value;
  }

}

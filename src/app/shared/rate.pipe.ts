import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rate'
})
export class RatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let tmp = '';
    if (value && !isNaN(value)) {
      for (let i = 0; i < value; i++) {
        tmp += '\u2605';
      }
    }
    return tmp;
  }

}

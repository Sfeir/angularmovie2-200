import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rate'
})
export class RatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    var tmp = '';
    if (value && !isNaN(value)) {
      for (var i = 0; i < value; i++) {
        tmp += '\u2605';
      }
    }
    return tmp;
  }

}

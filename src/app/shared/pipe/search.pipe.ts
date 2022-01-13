import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any[], ...args: any[]): any[] {
    return value.filter(k=>k.name.toLowerCase().includes(args[0]));
  }

}

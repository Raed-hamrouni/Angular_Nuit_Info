import { Pipe, PipeTransform } from '@angular/core';
import { Formation } from './Model/formation';
@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: Formation[]): Formation[] {
    value.sort((a,b)=>{
      if(a.date<b.date_fin) return -1;
      else if(a.date>b.date_fin) return 1;
      else return 0
    })
    return value;
  }

}

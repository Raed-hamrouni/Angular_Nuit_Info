import { Pipe, PipeTransform } from '@angular/core';
import { Seance } from './Model/seance';
@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: Seance[]): Seance[] {
    value.sort((a,b)=>{
      if(a.startTime<b.endTime) return -1;
      else if(a.startTime>b.endTime) return 1;
      else return 0
    })
    return value;
  }

}

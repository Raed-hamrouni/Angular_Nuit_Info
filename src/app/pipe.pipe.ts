import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {

  transform(value: string, ch1:string,ch2:string): unknown {
    return value.replace(ch1,ch2);
  }

}

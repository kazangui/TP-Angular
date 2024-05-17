import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'multiple',
  standalone: true
})
export class MultiplePipe implements PipeTransform {
  transform(HT: number, TVA: string): number {
    return HT+(HT*parseFloat(TVA));
  }
}

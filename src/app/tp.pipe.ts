import { Pipe, PipeTransform } from '@angular/core';
@Pipe(
  {
     name: 'count', standalone: true
  })
  export class TpPipe implements PipeTransform {
     transform(texte: string[], car: string): number {
      let count: number = 0;
      for (let i=0; i < texte.length; i++) {
        if (texte[i] === car){ count++; } }
        return count;
      }
    }

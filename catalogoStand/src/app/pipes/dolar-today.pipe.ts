import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dolarToday',
  standalone: true
})
export class DolarTodayPipe implements PipeTransform {

  transform(numero: number, moneda: string, factor: number): number | any {
    if (moneda == 'VED') {
      let resultado = numero * factor;
      return resultado;
    }else{
      return numero
    }
  }

}

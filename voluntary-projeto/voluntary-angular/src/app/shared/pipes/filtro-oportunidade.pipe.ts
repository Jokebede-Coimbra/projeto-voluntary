import { Oportunidade } from './../../oportunidades/model/oportunidade';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroOportunidade'
})
export class FiltroOportunidadePipe implements PipeTransform {

  transform(oportunidades: Oportunidade[], arg: any): any {
    const inputInvalido = (arg === '' || arg.length < 3);
    if (inputInvalido) {
      return oportunidades;
    }
    const resultadoProdutos = [];
    for (const oportunidade of oportunidades) {

      if (oportunidade.nome.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultadoProdutos.push(oportunidade);
      };
    };
    return resultadoProdutos;
  }

}

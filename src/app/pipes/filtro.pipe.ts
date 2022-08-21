import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(arrelgo: any[],
            texto: string = '',
            columna: string = 'title'
    ): any[] {

    if ( texto == '' ) {
      return arrelgo;
    }

    if ( !arrelgo ) {
      return arrelgo;
    }

    texto = texto.toLocaleLowerCase();
    return arrelgo.filter(
      // item => item.title.toLowerCase().includes( texto )
      item => item[columna].toLowerCase().includes( texto )
     );
  }

}

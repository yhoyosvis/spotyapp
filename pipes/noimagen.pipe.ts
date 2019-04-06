import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimagen'
})
export class NoimagenPipe implements PipeTransform {

  transform(imagenes: any[]): string {

    if(!imagenes){
      return '';
    }
    return null;
  }

}

import {Pipe , PipeTransform} from '@angular/core';

@Pipe({
    name: 'camelcase'
})

export class CamelCaseComponent implements PipeTransform {

    transform(value: any , data: any) {
      if (!value) { return value; }
      return value.replace(/\w\S*/g,  (txt) => {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
    }
}

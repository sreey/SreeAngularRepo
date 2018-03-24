import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capializeFirstChar'
})
export class CapializeFirstCharPipe implements PipeTransform {

  transform(value: string, args: string[]): any {
    if (!value) { return value; }

    //Refer following link to understand \w\S*/g -> javascript regex
    //https://www.w3schools.com/jsref/jsref_obj_regexp.asp
    return value.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

}

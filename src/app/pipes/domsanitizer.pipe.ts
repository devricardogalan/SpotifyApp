import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
    name: 'domsanitizer'
})

export class DomSanitizerPipe implements PipeTransform{
    constructor(private domSanitizer: DomSanitizer){}

    transform(value:string): any{
          const url='https://open.spotify.com/embed?uri=';
          return this.domSanitizer.bypassSecurityTrustResourceUrl(url+value);
      }  
}

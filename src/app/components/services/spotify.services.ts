/* 
  En un servicio puedo manejar mi data en un 
  espacio global y luego hacer que los components
  usen esa data desde diferentes puntos.

*/

import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
//import { environment } from '../../enviroments/enviroment';
//el map ayuda a filtrar resultados
import { map } from 'rxjs/operators';


@Injectable()
export class SpotifyService{
    private searchUrl: string;

    constructor(private _http: HttpClient){
      console.log('Funcionando...')

    }


    searchMusic(query: string){
 
  this.searchUrl=`https://api.spotify.com/v1/${query}`;
  
  const headers=new HttpHeaders({
    Authorization:
    "Bearer BQDn5emrdty7AB7CLxy5VcbRRYpPAzNyVoyF7A0oNjrNQfvrt8UmfQ9mYvZv1yqoFGQ4Q49NcX9MGUTHrcA"
  });

  return this._http.get(this.searchUrl, {headers});

          }
          getArtist(query: string) {
            return this.searchMusic(`search?q=${query}&type=artist&limit=15`).pipe(
              map(data => data["artists"].items)
            );
          }
} 

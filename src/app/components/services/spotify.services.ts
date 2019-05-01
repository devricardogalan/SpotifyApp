/* 
  En un servicio puedo manejar mi data en un 
  espacio global y luego hacer que los components
  usen esa data desde diferentes puntos.

*/

import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
//import { environment } from '../../enviroments/enviroment';
//el map ayuda a filtrar resultados
import { map, switchMap } from 'rxjs/operators';
import { fromEvent } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService{

    constructor(private _http: HttpClient){

    }
    
    searchMusic(query: string){
      debugger;
      const searchUrl=`https://api.spotify.com/v1/${query}`;

      
  
      const headers=new HttpHeaders({
        Authorization:
        "Bearer BQC5ocsojc8nTL54I2NP9lrkeuqoY8Vcxh0-NCb8JUZZvFw8f9KFl8w2EkPSpXAOla3ub1FrO4gK-ZeHiPM"
      });

      return this._http.get(searchUrl, {headers});

    }


          getArtists(query: string) {
            debugger
            return this.searchMusic(`search?q=${query}&type=artist&limit=15`).pipe(
              map(data => data["artists"].items)
              );
            
          }

          getArtist(id: string){
            debugger;
            return this.searchMusic(`artists/${id}`);
          }

          getTopTracks(id: string){
            debugger;
            return this.searchMusic(`artists/${id}/top-tracks?country=us`).pipe(
              map(data=> data["tracks"])
            );
          }

          getAlbums(id:string){
            debugger;
            return this.searchMusic(`artists/${id}/albums`).pipe(
              map(data=> data["items"])
            );
          }

          getAlbum( id:string ){
            debugger;
            return this.searchMusic(`albums/${id}`);
          }

          getAlbumsTracks(id:string){
            debugger;
            return this.searchMusic(`albums/${id}/tracks`).pipe(
              map(data=> data["items"])
            );
          }

} 

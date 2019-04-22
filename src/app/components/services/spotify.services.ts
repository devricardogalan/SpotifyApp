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


@Injectable({
  providedIn: 'root'
})
export class SpotifyService{

    constructor(private _http: HttpClient){
      console.log('Funcionando...')

    }
    searchMusic(query: string){
      debugger;
      const searchUrl=`https://api.spotify.com/v1/${query}`;
  
  const headers=new HttpHeaders({
    Authorization:
    "Bearer BQCmQCzZjWBhh7aebDE5S3uPfpwm3VgUwgTk4dXuNtKIh05wKcxsQvo61cC0CvMQXHkmWt7t66h6qZzdCgY"
  });

  return this._http.get(searchUrl, {headers});

          }
          getArtists(query: string) {
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
} 

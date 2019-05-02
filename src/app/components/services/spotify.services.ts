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
  debugger;

    private str="";
    private Authorization:string;
    private clientId= '2e00a8563be0488bb19059dbac471eba';

    
    constructor(private _http: HttpClient){

    }

    getTokenFromAPI(token) {
      debugger;
      if(localStorage.getItem('authToken')=="" || localStorage.getItem('authToken')=="undefined"){
      let setToken=localStorage.setItem('authToken', token);
      }
      let authToken: string = localStorage.getItem('authToken');

      if ( authToken=="undefined" || authToken=="") {
        // Get the hash of the url
const _window: any= window;
const hash :any = window.location.hash
.substring(1)
.split('&')
.reduce(function (initial, item) {
  if (item) {
    var parts = item.split('=');
    initial[parts[0]] = decodeURIComponent(parts[1]);
  }
  return initial;
}, {});
window.location.hash = '';

// Set token
let _token: any = token;

const authEndpoint = 'https://accounts.spotify.com/authorize';

// Replace with your app's client ID, redirect URI and desired scopes
const clientId = this.clientId;
const redirectUri = encodeURIComponent('http://localhost:4200');
const scopes = [
  'user-read-birthdate',
  'user-read-email',
  'user-read-private'
];
const response_type= 'token'

// If there is no token, redirect to Spotify authorization
if (_token=="" || !_token) {
  _window.location = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=${response_type}&show_dialog=true`;
}
//localStorage.setItem('authToken', _token);
      } else {
          console.log("Token already received");
    }

  }
  
    searchMusic(query: string){
      //this.getTokenFromAPI();
      debugger;
      const searchUrl=`https://api.spotify.com/v1/${query}`;
      let Authorization=localStorage.getItem('authToken');
      
  
      const headers=new HttpHeaders({
        Authorization:
        `Bearer ${Authorization}`
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

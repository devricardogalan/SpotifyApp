import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import { environment } from '../../enviroments/enviroment';
import { map } from 'rxjs/operators';


@Injectable()
export class SpotifyService{
    private searchUrl: string;
    private clientId: string = environment.clientId;
    private clientSecret: string = environment.clientSecret;

    constructor(private _http: Http){

    }

      // Get access token from Spotify to use API
  getAuth = () => {


    /*
    app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8888');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
    */

    let headers = new Headers();
    headers.append('Authorization', 'Basic ' + btoa(this.clientId + ":" + this.clientSecret));
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
  /*  headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');
    headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    headers.append('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    headers.append('Access-Control-Allow-Credentials', true);
*/


    let params: URLSearchParams = new URLSearchParams();
    params.set('grant_type', 'client_credentials');
    let body = params.toString();

    return this._http.post('https://accounts.spotify.com/api/token', body, { headers: headers })
      .pipe(map(res => res.json()));

  }

    searchMusic(query: string, type='artist', authToken: string){
        this.searchUrl = 'https://api.spotify.com/v1/search?query=' + query + '&offset=0&limit=20&type=' + type + '&market=US';
        return this._http.get(this.searchUrl)
            .pipe(map(res => res.json()));
    }
} 

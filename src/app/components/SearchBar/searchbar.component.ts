import { Component} from '@angular/core';
import {SpotifyService} from '../services/spotify.services'
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'app-searchbar',
    templateUrl: './searchbar.component.html',
    styleUrls: ['./searchbar.component.scss'],
    providers: [SpotifyService]
    
})

export class SearchBarComponent {
    searchString: string;
    results: any[]=[];
    artists: any[]=[];
    loading: boolean;
    tracks: any []=[];

    constructor(private _spotifyService:SpotifyService, private router: Router){
      this.search("");  
      if(location.hash.length>9){
            this.search(location.hash.substring(9,location.hash.length));
        }
        
    }

    

    search(query){
      if(query==""){
        this.router.navigate([ '/search', decodeURIComponent(query)  ]);  
      }else{ 
      this._spotifyService.getArtists( decodeURIComponent(query) )
        .subscribe( (data: any) => {
            this.artists = data;
            });
            this.router.navigate([ '/search', decodeURIComponent(query)  ]);
      }
    }
}

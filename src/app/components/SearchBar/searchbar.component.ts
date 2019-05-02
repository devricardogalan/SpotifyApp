import { Component } from '@angular/core';
import {SpotifyService} from '../services/spotify.services'


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

    constructor(private _spotifyService:SpotifyService){
    }

    

    search(query){
      this._spotifyService.getArtists( query )
        .subscribe( (data: any) => {
            this.artists = data;
            });
    }
}

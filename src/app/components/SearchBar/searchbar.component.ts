import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
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
  //  query: FormControl = new FormControl();
    constructor(private _spotifyService:SpotifyService){
    }

    

          search(query){
            debugger;
            console.log(query);
            this._spotifyService.getArtists( query )
                  .subscribe( (data: any) => {
                    debugger;
                  //  this.artists=data;
                    this.artists = data;
                  // console.log(this.artists);
                  });
          }
}

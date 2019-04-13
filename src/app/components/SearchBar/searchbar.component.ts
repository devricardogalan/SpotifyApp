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
    results: string[];
    query: FormControl = new FormControl();
    
    constructor(private _spotifyService:SpotifyService){

    }

    ngOnInit() {
        this.query.valueChanges
          .subscribe(query => this._spotifyService.getAuth()
            .subscribe(res => this._spotifyService.searchMusic(query, 'artist', res.access_token).subscribe(
              res => {
                console.log(res.artists.items)
                this.results = res.artists.items
              })
            ));
            }
}

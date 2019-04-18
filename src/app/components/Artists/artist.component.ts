import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../services/spotify.services';

@Component ({
    selector: 'app-artist',
    templateUrl: './artist.component.html',
    styleUrls: [] 
})

export class ArtistComponent{
    artist: any={};
    topTracks: any []=[];

    loadingArtist: boolean;

    constructor( private router: ActivatedRoute,
                 private spotiify: SpotifyService ){

                    this.loadingArtist=true;
                    

                 }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../services/spotify.services';
import { Router } from '@angular/router';

@Component ({
    selector: 'app-artist',
    templateUrl: './artist.component.html',
    styleUrls: [] 
})

export class ArtistComponent{
    artist: any={};
    topTracks: any []=[];
    albums: any []=[];

    loadingArtist: boolean;

    constructor( private router: ActivatedRoute,
                 private spotify: SpotifyService ){

                    this.loadingArtist=true;

                    this.router.params.subscribe( params => {
                        this.getArtist ( params['id'] );
                        //this.getTopTracks( params['id'] );
                        this.getAlbums( params['id'] );
                    } )
                 }

    getArtist( id : string ){
        this.loadingArtist=true;
        this.spotify.getArtist(id)
            .subscribe( artist => {
                debugger;
                console.log(artist);
                this.artist=artist;
                this.loadingArtist=false;
            } )
    }             

    getTopTracks( id: string ){
        this.spotify.getTopTracks( id )
            .subscribe( topTracks => {
                console.log(topTracks);
             //   this.topTracks.push(topTracks);
                this.topTracks=topTracks;
            } )
    }

    getAlbums( id:string ){
        this.spotify.getAlbums( id )
            .subscribe( albums => {
                debugger;
                this.albums=albums;
                console.log(albums);
            } )
    }
}

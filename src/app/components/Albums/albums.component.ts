import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../services/spotify.services';
import { Router } from '@angular/router';

@Component({
    selector: 'app-album',
    templateUrl: './albums.component.html',
    styleUrls: []
})

export class AlbumComponent{
    album: any={};
    albumTracks: any={};
    constructor( private router: ActivatedRoute,
                private spotify: SpotifyService,
                private  _router: Router){  
                    debugger;
                    this.router.params.subscribe( params => {
                        this.getAlbum( params['id'] );
                        this.getAlbumTracks( params['id'] );
                    } )
            
           }   
    
        getAlbum( id:string ){
            this.spotify.getAlbum( id )
                .subscribe( album => {
                    debugger;
                    this.album=album;
                    console.log(album);
                } )            
        }   

        getAlbumTracks( id:string ){
            debugger;
            this.spotify.getAlbumsTracks( id )
                .subscribe( albumTracks => {
                    debugger;
                    this.albumTracks=albumTracks;
                    console.log(albumTracks);
                } )
        }

        addToPlaylist( track:any ){
            debugger;
            console.log(track);
        }

    }




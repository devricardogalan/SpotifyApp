import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../services/spotify.services';
import { Router } from '@angular/router';

@Component({
    selector: 'app-album',
    templateUrl: './albums.component.html',
    styleUrls: ['./albums.component.scss']
})



export class AlbumComponent{
    album: any={};
    albumTracks: any={};
    playlist: any [] = [];
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

        
        

        addToPlaylist( track : any){
            debugger;
            let favoriteTracks: Array<string> = JSON.parse(localStorage.getItem('spotyfav'));

            if ( favoriteTracks === null) {
                localStorage.setItem('spotyfav', JSON.stringify([track.uri]));
            } else {
                if (!favoriteTracks.includes(track.uri)){
                    favoriteTracks.push(track.uri);
                    localStorage.setItem('spotyfav', JSON.stringify(favoriteTracks));
                } else {
                   let index = favoriteTracks.indexOf(track.uri);
                    if (index > -1) {
                        favoriteTracks.splice(index, 1);
                    }
                    localStorage.setItem('spotyfav', JSON.stringify(favoriteTracks));
                }
            }
            
            if(favoriteTracks !== null){
                if(favoriteTracks.length === 0 ){
                    localStorage.removeItem('spotyfav');
                }
            }
        }

        getPlaylist(){
        }
    }
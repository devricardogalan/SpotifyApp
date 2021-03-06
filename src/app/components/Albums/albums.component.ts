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
    _toggle: boolean= false;
    constructor( private router: ActivatedRoute,
                private spotify: SpotifyService,
                private  _router: Router){  
                    this.router.params.subscribe( params => {
                        this.getAlbum( params['id'] );
                        this.getAlbumTracks( params['id'] );
                    } )
            
    }   
    
    getAlbum( id:string ){
        this.spotify.getAlbum( id )
            .subscribe( album => {
                this.album=album;
                } )            
    }   

    getAlbumTracks( id:string ){
        this.spotify.getAlbumsTracks( id )
            .subscribe( albumTracks => {
                    this.albumTracks=albumTracks;
                    console.log(albumTracks);
             } )
    }
    
    addToPlaylist( track : any){
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

    toggle(array, e){
        this._toggle=!this._toggle;
        this.tableSort(array,this._toggle);
    }

    tableSort(array, toggle){
        if(!toggle){
            array.sort((a,b)=>(a.duration_ms>b.duration_ms)? 1 : -1)
        }else{
            array.sort((a,b)=>(a.duration_ms<b.duration_ms)? 1 : -1)
        }
        return array;
    }
}
import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../services/spotify.services';
import { Router } from '@angular/router';

@Component ({
    selector: 'app-artist',
    templateUrl: './artist.component.html',
    styleUrls: ['./artist.component.scss'] 
})

export class ArtistComponent{
    artist: any={};
    topTracks: any []=[];
    albums: any []=[];

    loadingArtist: boolean;

    constructor( private router: ActivatedRoute,
                 private spotify: SpotifyService,
                 private _router: Router ){

                this.loadingArtist=true;

                this.router.params.subscribe( params => {
                    this.getArtist ( params['id'] );
                    this.getAlbums( params['id'] );
                } )
    }

    getArtist( id : string ){
        this.loadingArtist=true;
        this.spotify.getArtist(id)
            .subscribe( artist => {
                this.artist=artist;
                this.loadingArtist=false;
            } )
    } 

    getAlbums( id:string ){
        this.spotify.getAlbums( id )
            .subscribe( albums => {
                this.albums=albums;
            } )
    }

    viewAlbum(album: any){
        let albumId;
        if ( album.type === 'album' ) {
          albumId = album.id;
        } else {
          albumId = album.album[0].id;
        }
    
        this._router.navigate([ '/album', albumId  ]);
    }
}

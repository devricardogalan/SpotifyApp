import { Component } from "@angular/core";
import { AlbumComponent } from '../albums.component';

@Component({
    selector: 'app-playlist',
    templateUrl: './playlist.component.html',
    styleUrls: []
})

export class PlaylistComponent extends AlbumComponent{
    
    
    super( router, spotify,_router){  
        this.addToPlaylist ;        
    } 
            
    
   
}
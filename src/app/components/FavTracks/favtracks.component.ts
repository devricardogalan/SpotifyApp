import { Component } from '@angular/core';
import {SpotifyService} from '../services/spotify.services'


@Component({
    moduleId: module.id,
    selector: 'app-favtracks',
    template: `
    <table class="table">
        <thead>
          <tr>
            <th class="styled-tableheader">Vista Previa</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let track of tracksArray">
            <td>
            <iframe
              [src]="track.uri | domsanitizer"
              width="320"
              height="90"
              frameborder="0"
              allowtransparency="true"
              allow="encrypted-media"
            ></iframe> 
            </td>
          </tr>
        </tbody>
      </table>
    `,
    styleUrls: ['./favtracks.component.scss'],
    providers: [SpotifyService]
})

export class FavTracksComponent {

    tracks: any []=[];
    tracksArray=[];
    constructor(private _spotifyService:SpotifyService){
        this.getFavouriteTracks();
    }

          getFavouriteTracks(){
            debugger;
            let tracks= localStorage.getItem('spotyfav');
            console.log(tracks);
            let arrayToModify = tracks.replace("[","").replace("]","").split(",");
            
            for(let i=1; i<arrayToModify.length;i++){
               let uri=arrayToModify[i].substring(1,arrayToModify[i].length-1)
               this.tracksArray.push({uri});
            }

          }
          
}
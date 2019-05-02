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
              [src]="track.uris | domsanitizer"
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
            
            //let arrayToModify = tracks.replace("[","").replace("]","").split(",");
            if(tracks!=null){
              let uri=JSON.parse(localStorage.getItem('spotyfav'));
              for(let i=0; i<uri.length;i++){
                let uris=uri[i]
              this.tracksArray.push({uris});
              }
            /*let arrayToModify=tracks.replace('"', '').replace("[","").replace("]","").replace('"','').split(",");

            for(let i=0; i<arrayToModify.length;i++){
               let uri=arrayToModify[i].substring(0,arrayToModify[i].length)
               this.tracksArray.push({uri});*/
            }
          }

          
          
}
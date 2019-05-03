import { Component,  OnInit, Input } from '@angular/core';
import {SpotifyService} from '../services/spotify.services';
import { switchMap } from 'rxjs/operators';
import {FormControl} from '@angular/forms';
import {debounceTime} from 'rxjs/operators';
import {distinctUntilChanged} from 'rxjs/operators';
import { Router } from '@angular/router'; 

@Component({
    moduleId: module.id,
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

  @Input() items: any[]=[];

    searchString: string;
    results: any[] = [];
    queryField: FormControl = new FormControl();
    artists: any[]=[];
    loading: boolean;
    isToken: boolean=false;
    token: string;
    toggle:boolean =false;
    constructor(private _spotifyService:SpotifyService, private router:Router){

    }
    ngOnInit(){
      if(window.location.hash.length>100){
        let token=window.location.hash.substring(14,177);
        this._spotifyService.getTokenFromAPI(token);
      }else{
        let token="";
        this._spotifyService.getTokenFromAPI(token);
      }
    }


    viewArtist(item:any){
      let artistId;
      this.toggle=true;
      if ( item.type === 'artist' ) {
        artistId = item.id;
      } else {
        artistId = item.artists[0].id;
      }
      
      this.router.navigate([ '/artist', artistId  ]);
  
    }

    search(){
      this.toggle=false;
      this.queryField.valueChanges
        .pipe(debounceTime(200),
        //Emits a value from the source Observable only after a particular time span has passed without another source emission
        distinctUntilChanged(),
        //distinctUntilChanged uses === comparison by default, object references must match!
        switchMap((query) =>  this._spotifyService.getArtists(query)))
        .subscribe(  result => { if (result.status === 400) { console.log('nothing found') } else { this.results = result }
        });
  }
}

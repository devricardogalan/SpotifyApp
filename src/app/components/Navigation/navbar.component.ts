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
    constructor(private _spotifyService:SpotifyService, private router:Router){

    }
    ngOnInit(){
      debugger;
      let token=window.location.hash.substring(14,177);
      this._spotifyService.getTokenFromAPI(token);
/*      if(this.isToken==false){
        this._spotifyService.getTokenFromAPI();
      if(window.location.hash.substring(1,13)=="access_token"){
        this.token=window.location.hash.substring(14,177);
        this.isToken=true;
      }
      */
     
    }

    getAuth(){

      
  }

    viewArtist(item:any){
      debugger;
      let artistId;
    
      if ( item.type === 'artist' ) {
        artistId = item.id;
      } else {
        artistId = item.artists[0].id;
      }
      
      this.router.navigate([ '/artist', artistId  ]);
  
    }

 search(){
   debugger;
  this.queryField.valueChanges
  .pipe(debounceTime(200),
   distinctUntilChanged(),
   switchMap((query) =>  this._spotifyService.getArtists(query)))
  .subscribe(  result => { if (result.status === 400) { return; } else { this.results = result }
});
    
      //    this.autocomplete(document.getElementById("myInput"), this.artists, e);
  }




   autocomplete(inp, arr, e) {
    debugger;
    e=e;
     /*the autocomplete function takes two arguments,
     the text field element and an array of possible autocompleted values:*/
     var currentFocus;
     /*execute a function when someone writes in the text field:*/
    
       debugger;
         let a,b,i, val= inp.value;
         let elmnt={};
         /*close any already open lists of autocompleted values*/
         this.closeAllLists(elmnt, inp);
         if (!val) { return false;}
         currentFocus = -1;
         /*create a DIV element that will contain the items (values):*/
         a = document.createElement("DIV");
         a.setAttribute("id", inp.id + "autocomplete-list");
         a.setAttribute("class", "autocomplete-items");
         /*append the DIV element as a child of the autocomplete container:*/
         inp.parentNode.appendChild(a);
         /*for each item in the array...*/
         for (i = 0; i < arr.length; i++) {
           debugger;
           /*check if the item starts with the same letters as the text field value:*/
           if (arr[i].name.substr(0, val.length).toUpperCase() == val.toUpperCase()) {
             /*create a DIV element for each matching element:*/
                          b = document.createElement("DIV");
             /*make the matching letters bold:*/
             b.innerHTML = "<strong>" + arr[i].name.substr(0, val.length) + "</strong>";
             b.innerHTML += arr[i].name.substr(val.length);
             /*insert a input field that will hold the current array item's value:*/
             b.innerHTML += "<input type='hidden' value='" + arr[i].name + "'>";
             /*execute a function when someone clicks on the item value (DIV element):*/
                 b.addEventListener("click", function(e) {
                 /*insert the value for the autocomplete text field:*/
                 inp.value = this.getElementsByTagName("input")[0].value;
                 /*close the list of autocompleted values,
                 (or any other open lists of autocompleted values:*/
                 this.closeAllLists(elmnt, inp);
             });
             a.appendChild(b);
           }
         };
     /*execute a function presses a key on the keyboard:*/
    
         var x = document.getElementById(inp.id + "autocomplete-list");
         if (x) inp.x = x.getElementsByTagName("div");
         if (e.keyCode == 40) {
           /*If the arrow DOWN key is pressed,
           increase the currentFocus variable:*/
           currentFocus++;
           /*and and make the current item more visible:*/
           this.addActive(x, currentFocus);
         } else if (e.keyCode == 38) { //up
           /*If the arrow UP key is pressed,
           decrease the currentFocus variable:*/
           currentFocus--;
           /*and and make the current item more visible:*/
           this.addActive(x, currentFocus);
         } else if (e.keyCode == 13) {
           /*If the ENTER key is pressed, prevent the form from being submitted,*/
           e.preventDefault();
           if (currentFocus > -1) {
             /*and simulate a click on the "active" item:*/
             if (x) x[currentFocus].click();
           }
         }
     };
     addActive(x: any, currentFocus) {
       /*a function to classify an item as "active":*/
       if (!x) return false;
       /*start by removing the "active" class on all items:*/
       this.removeActive(x);
       if (currentFocus >= x.length) currentFocus = 0;
       if (currentFocus < 0) currentFocus = (x.length - 1);
       /*add class "autocomplete-active":*/
       x[currentFocus].classList.add("autocomplete-active");
     }
     removeActive(x) {
       /*a function to remove the "active" class from all autocomplete items:*/
       for (var i = 0; i < x.length; i++) {
         x[i].classList.remove("autocomplete-active");
       }
     }
     closeAllLists(elmnt, inp) {
       /*close all autocomplete lists in the document,
       except the one passed as an argument:*/
       var x = document.getElementsByClassName("autocomplete-items");
       for (var i = 0; i < x.length; i++) {
         if (elmnt != x[i] && elmnt != inp) {
         x[i].parentNode.removeChild(x[i]);
       }
     }
   }
   /*execute a function when someone clicks in the document:*/
  /* document.addEventListener("click", function (e) {
       this.closeAllLists(e.target);
   });
 }*/
}

import { BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
// Importar rutas
import { ROUTES } from './app.routes';
import { NavbarComponent } from './components/Navigation/navbar.component';
import { SearchBarComponent } from './components/SearchBar/searchbar.component';
import { ArtistComponent } from './components/Artists/artist.component';
import { LoadingComponent } from './components/loading/loading.component';
import { NoImagePipe } from './pipes/noimage.pipe';
import { DomSanitizerPipe } from './pipes/domsanitizer.pipe'
import { CardsComponent } from './components/cards/cards.component';
import {RouterModule} from '@angular/router';
import { AlbumComponent } from './components/Albums/albums.component';
import { FavTracksComponent } from './components/FavTracks/favtracks.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchBarComponent,
    ArtistComponent,
    LoadingComponent,
    NoImagePipe,
    CardsComponent,
    DomSanitizerPipe,
    AlbumComponent,
    FavTracksComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot( ROUTES, { useHash: true } )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { HttpModule } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Importar rutas
import { ROUTES } from './app.routes';
import { AboutComponent } from './components/About/about.component';
import { NavbarComponent } from './components/Navigation/navbar.component';
import { SearchBarComponent } from './components/SearchBar/searchbar.component';
import { ArtistComponent } from './components/Artists/artist.component';
import { LoadingComponent } from './components/loading/loading.component';
import { NoImagePipe } from './pipes/noimage.pipe';
import { DomSanitizerPipe } from './pipes/domsanitizer.pipe'
import { CardsComponent } from './components/cards/cards.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NavbarComponent,
    SearchBarComponent,
    ArtistComponent,
    LoadingComponent,
    NoImagePipe,
    CardsComponent,
    DomSanitizerPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
   // HttpModule
    HttpClientModule,
    RouterModule.forRoot( ROUTES, { useHash: true } )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

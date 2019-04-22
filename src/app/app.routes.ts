import { Routes } from '@angular/router';
import { SearchBarComponent } from './components/SearchBar/searchbar.component';
import { ArtistComponent } from './components/Artists/artist.component';
import { AlbumComponent } from './components/Albums/albums.component';


export const ROUTES: Routes = [
    { path: 'home', component: SearchBarComponent },
    { path: 'artist/:id', component: ArtistComponent },
    { path: 'album/:id', component: AlbumComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
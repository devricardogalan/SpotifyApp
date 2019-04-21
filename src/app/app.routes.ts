import { Routes } from '@angular/router';
import { SearchBarComponent } from './components/SearchBar/searchbar.component';
import { ArtistComponent } from './components/Artists/artist.component';



export const ROUTES: Routes = [
    { path: 'homoe', component: SearchBarComponent },
    { path: 'artist/:id', component: ArtistComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
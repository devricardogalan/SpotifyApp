import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchBarComponent } from './components/SearchBar/searchbar.component';
import { ArtistComponent } from './components/Artists/artist.component';
import { AlbumComponent } from './components/Albums/albums.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: SearchBarComponent
  },
  {
    path: 'artist/:id',
    component: ArtistComponent
  },
  { 
    path: 'search/:query', 
    component: SearchBarComponent 
  },
  {
    path: 'album/:id',
    component: AlbumComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./core/components/home/home.component";

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: { breadcrumb: 'Home' }
  },
  {
    path: 'pokemon',
    loadChildren: () => import('./features/pokemon/pokemon.module').then(m => m.PokemonModule),
    data: { breadcrumb: 'Pokemon' }
  },
  {
    path: 'books',
    loadChildren: () => import('./features/books/books.module').then(m => m.BooksModule),
    data: { breadcrumb: 'Books' }
  },
  {
    path: 'music',
    loadChildren: () => import('./features/music/music.module').then(m => m.MusicModule),
    data: { breadcrumb: 'Music' }
  },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

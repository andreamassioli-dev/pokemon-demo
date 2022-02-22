import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { EditPokemonComponent } from "./containers/edit-pokemon/edit-pokemon.component";
import { NewPokemonComponent } from "./containers/new-pokemon/new-pokemon.component";
import { PokemonAbilitiesComponent } from "./containers/pokemon-abilities/pokemon-abilities.component";
import { PokemonDetailComponent } from "./containers/pokemon-detail/pokemon-detail.component";
import { PokemonListComponent } from "./containers/pokemon-list/pokemon-list.component";
import { PokemonService } from "./services/pokemon/pokemon.service";

const routes: Routes = [
  { path: '', component: PokemonListComponent, pathMatch: 'full', data: { breadcrumb: null } },
  {
    path: ':id',
    data: { breadcrumb: 'Detail' },
    children: [
      { path: '', component: PokemonDetailComponent, data: { breadcrumb: null }, pathMatch: 'full' },
      { path: 'abilities', component: PokemonAbilitiesComponent, data: { breadcrumb: 'Abilities' } }
    ]
  },
  { path: 'new', component: NewPokemonComponent, data: { breadcrumb: 'New' } },
  { path: 'edit/:id', component: EditPokemonComponent, data: { breadcrumb: 'Edit' } },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    PokemonService
  ]
})
export class PokemonRoutingModule { }

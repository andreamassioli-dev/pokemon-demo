import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { PokemonListComponent } from './containers/pokemon-list/pokemon-list.component';
import { NewPokemonComponent } from './containers/new-pokemon/new-pokemon.component';
import { EditPokemonComponent } from './containers/edit-pokemon/edit-pokemon.component';
import { PokemonDetailComponent } from './containers/pokemon-detail/pokemon-detail.component';
import { PokemonRoutingModule } from "./pokemon-routing.module";
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { PokemonAbilitiesComponent } from './containers/pokemon-abilities/pokemon-abilities.component';

@NgModule({
  declarations: [
    PokemonListComponent,
    NewPokemonComponent,
    EditPokemonComponent,
    PokemonDetailComponent,
    PokemonCardComponent,
    PokemonAbilitiesComponent
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    HttpClientModule,
    RouterModule
  ]
})
export class PokemonModule { }

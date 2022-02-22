import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { map, switchMap } from "rxjs";
import { Pokemon } from "../../../../models/pokemon";
import { PokemonService } from "../../services/pokemon/pokemon.service";

@Component({
  selector: 'am-pokemon-abilities',
  template: `
    <div *ngIf="!isLoading && pokemon">
      <h4>{{ '#' + pokemon.id + ' - ' + pokemon.name | titlecase }}</h4>
      <b>First ability: </b>
      <span>{{ pokemon.abilities[0].ability.name | titlecase }}</span>
    </div>
    <div *ngIf="isLoading" class="h-100 d-flex justify-content-center align-items-center">
      Loading...
    </div>
  `
})
export class PokemonAbilitiesComponent implements OnInit {

  isLoading = true;
  pokemon: Pokemon | null = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    this.reactToPokemonId();
  }

  private reactToPokemonId(): void {
    this.activatedRoute.params.pipe(
      map(params => +params['id']),
      switchMap(id => this.pokemonService.getById$(id))
    ).subscribe(pokemon => {
      this.isLoading = false;
      this.pokemon = pokemon;
    });
  }

}

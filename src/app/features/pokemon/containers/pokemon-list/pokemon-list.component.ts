import { Component, OnInit } from '@angular/core';
import { PokemonForList } from "../../../../models/pokemon-for-list";
import { PokemonService } from "../../services/pokemon/pokemon.service";

@Component({
  selector: 'am-pokemon-list',
  template: `
    <div class="d-flex">
      <h4 class="flex-fill">List of pokemon</h4>
      <button class="btn btn-secondary ms-2" routerLink="new">New pokemon</button>
    </div>
    <div *ngIf="!isLoading" class="container-fluid">
      <div class="row">
        <am-pokemon-card *ngFor="let pokemon of pokemons" class="col-6 my-2" [pokemon]="pokemon" [routerLink]="pokemon.id + ''"></am-pokemon-card>
      </div>
    </div>
    <div *ngIf="isLoading" class="container-fluid h-100 d-flex justify-content-center align-items-center">
      Loading...
    </div>
  `
})
export class PokemonListComponent implements OnInit {

  isLoading = false;
  pokemons: PokemonForList[] = [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.initPokemon();
  }

  private initPokemon(): void {
    this.isLoading = true;

    this.pokemonService.getAll$().subscribe(pokemons => {
      this.pokemons = pokemons;
      this.isLoading = false;
    });
  }

}

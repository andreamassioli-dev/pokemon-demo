import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { map, Observable, tap } from "rxjs";
import { environment } from "../../../../../environments/environment";
import { Pokemon } from "../../../../models/pokemon";
import { PokemonForList } from "../../../../models/pokemon-for-list";

@Injectable()
export class PokemonService {

  get baseApi(): string {
    return `${environment.pokeapiUrl}`;
  }

  constructor(private httpClient: HttpClient) { }

  getAll$(): Observable<PokemonForList[]> {
    const url = `${this.baseApi}/pokemon-species?limit=-1`

    return this.httpClient.get<{ results: PokemonForList[] }>(url).pipe(
      map(({ results }) => results.map(pokemon => {
        const urlParts = pokemon.url.split('/');

        return {
          ...pokemon,
          id: +urlParts[urlParts.length - 2]
        };
      }))
    );
  }

  getById$(id: number): Observable<Pokemon> {
    const url = `${this.baseApi}/pokemon/${id}`

    return this.httpClient.get<Pokemon>(url);
  }

}

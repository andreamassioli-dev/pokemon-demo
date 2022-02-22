import { Component, Input } from '@angular/core';
import { PokemonForList } from "../../../../models/pokemon-for-list";

@Component({
  selector: 'am-pokemon-card',
  template: `
    <div class="card border-primary" role="button">
      <div class="card-body">
        <b>{{ '#' + pokemon.id + ' - ' + pokemon.name | titlecase }}</b>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `
  ]
})
export class PokemonCardComponent {

  @Input() pokemon!: PokemonForList;

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'am-menu',
  template: `
    <ul class="list-group">
      <li class="list-group-item" role="button" routerLink="home" routerLinkActive="active">Home</li>
      <li class="list-group-item" role="button" routerLink="pokemon" routerLinkActive="active">Pokemon</li>
      <li class="list-group-item" role="button" routerLink="books" routerLinkActive="active">Books</li>
      <li class="list-group-item" role="button" routerLink="music" routerLinkActive="active">Music</li>
    </ul>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `
  ]
})
export class MenuComponent {

}

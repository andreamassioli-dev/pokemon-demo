import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './containers/books/books.component';


@NgModule({
  declarations: [
    BooksComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule
  ]
})
export class BooksModule { }

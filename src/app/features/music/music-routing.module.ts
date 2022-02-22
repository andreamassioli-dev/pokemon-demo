import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MusicComponent } from "./containers/music/music.component";

const routes: Routes = [
  { path: '**', component: MusicComponent, data: { breadcrumb: null } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MusicRoutingModule { }

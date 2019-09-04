import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmsComponent } from './films.component';

const filmsRota: Routes = [{
  path: 'films',
  component: FilmsComponent
}]

@NgModule({
  imports: [RouterModule.forChild(filmsRota)],
  exports: [
    RouterModule
  ]
})
export class FilmsRoutingModule { }

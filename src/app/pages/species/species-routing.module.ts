import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpeciesComponent } from './species.component';

const speciesRota: Routes = [{
  path: 'species',
  component: SpeciesComponent
}]

@NgModule({
  imports: [RouterModule.forChild(speciesRota)],
  exports: [
    RouterModule
  ]
})
export class SpeciesRoutingModule { }

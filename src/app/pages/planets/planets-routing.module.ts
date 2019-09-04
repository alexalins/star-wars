import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanetsComponent } from './planets.component';

const planetsRota: Routes = [{
  path: 'planets',
  component: PlanetsComponent
}]

@NgModule({
  imports: [RouterModule.forChild(planetsRota)],
  exports: [
    RouterModule
  ]
})
export class PlanetsRoutingModule { }

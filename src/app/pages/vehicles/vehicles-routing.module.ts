import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehiclesComponent } from './vehicles.component';

const vehiclesRota: Routes = [{
  path: 'vehicles',
  component: VehiclesComponent
}]

@NgModule({
  imports: [RouterModule.forChild(vehiclesRota)],
  exports: [
    RouterModule
  ]
})
export class VehiclesRoutingModule { }

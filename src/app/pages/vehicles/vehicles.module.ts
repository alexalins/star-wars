import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiclesRoutingModule } from './vehicles-routing.module';
import { VehiclesComponent } from './vehicles.component';
import { MenuModule } from '../menu/menu.module';

@NgModule({
  declarations: [VehiclesComponent],
  imports: [
    MenuModule,
    CommonModule,
    VehiclesRoutingModule
  ]
})
export class VehiclesModule { }

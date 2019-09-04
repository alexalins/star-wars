import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';import { PlanetsRoutingModule } from './planets-routing.module';
import { PlanetsComponent } from './planets.component';
import { MenuModule } from '../menu/menu.module';
;

@NgModule({
  declarations: [PlanetsComponent],
  imports: [
    MenuModule,
    CommonModule,
    PlanetsRoutingModule
  ]
})
export class PlanetsModule { }

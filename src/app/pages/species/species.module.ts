import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeciesRoutingModule } from './species-routing.module';
import { SpeciesComponent } from './species.component';
import { MenuModule } from '../menu/menu.module';

@NgModule({
  declarations: [SpeciesComponent],
  imports: [
    MenuModule,
    CommonModule,
    SpeciesRoutingModule
  ]
})
export class SpeciesModule { }

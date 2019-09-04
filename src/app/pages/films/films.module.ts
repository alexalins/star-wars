import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmsRoutingModule } from './films-routing.module';
import { FilmsComponent } from './films.component';
import { MenuModule } from '../menu/menu.module';

@NgModule({
  declarations: [FilmsComponent],
  imports: [
    MenuModule,
    CommonModule,
    FilmsRoutingModule,
  ]
})
export class FilmsModule { }

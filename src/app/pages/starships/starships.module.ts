import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarshipsRoutingModule } from './starships-routing.module';
import { StarshipsComponent } from './starships.component';
import { MenuModule } from '../menu/menu.module';

@NgModule({
  declarations: [StarshipsComponent],
  imports: [
    MenuModule,
    CommonModule,
    StarshipsRoutingModule
  ]
})
export class StarshipsModule { }

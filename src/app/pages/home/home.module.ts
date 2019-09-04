import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MenuModule } from '../menu/menu.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    MenuModule,
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }

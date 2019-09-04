import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { PagesRoutingModule } from '../pages-routing.module';

@NgModule({
  declarations: [MenuComponent],
  imports: [
    PagesRoutingModule,
    CommonModule,
  ],
  exports: [MenuComponent]
})
export class MenuModule { }

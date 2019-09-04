import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleRoutingModule } from './people-routing.module';
import { PeopleComponent } from './people.component';
import { MenuModule } from '../menu/menu.module';

@NgModule({
  declarations: [PeopleComponent],
  imports: [
    MenuModule,
    CommonModule,
    PeopleRoutingModule
  ]
})
export class PeopleModule { }

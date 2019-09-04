import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleComponent } from './people.component';

const peopleRota: Routes = [{
  path: 'people',
  component: PeopleComponent
}]

@NgModule({
  imports: [RouterModule.forChild(peopleRota)],
  exports: [
    RouterModule
  ]
})
export class PeopleRoutingModule { }

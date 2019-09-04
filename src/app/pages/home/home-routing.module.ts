import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const homeRota: Routes = [{
  path: '',
  component: HomeComponent
}]

@NgModule({
  imports: [RouterModule.forChild(homeRota)],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule { }

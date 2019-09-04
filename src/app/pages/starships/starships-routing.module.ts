import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StarshipsComponent } from './starships.component';

const starshipsRota: Routes = [{
  path: 'starships',
  component: StarshipsComponent
}]

@NgModule({
  imports: [RouterModule.forChild(starshipsRota)],
  exports: [
    RouterModule
  ]
})
export class StarshipsRoutingModule { }

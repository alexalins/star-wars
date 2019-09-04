import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { FilmsModule } from './films/films.module';
import { PeopleModule } from './people/people.module';
import { PlanetsModule } from './planets/planets.module';
import { SpeciesModule } from './species/species.module';
import { StarshipsModule } from './starships/starships.module';
import { VehiclesModule } from './vehicles/vehicles.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [],
  imports: [
    PagesRoutingModule,
    HomeModule,
    FilmsModule,
    PeopleModule,
    PlanetsModule,
    SpeciesModule,
    StarshipsModule,
    VehiclesModule,
    CommonModule
  ],
  exports:[]
})
export class PagesModule { }

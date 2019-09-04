import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const pagesRoutes: Routes = [
  { path: 'pages',
  children: [
    { path: '', loadChildren: './home/home.module#HomeModule'},
    { path: 'films', loadChildren: './films/films.module#FilmsModule'},
    { path: 'people', loadChildren: './people/people.module#PeopleModule'},
    { path: 'planets', loadChildren: './planets/planets.module#PlanetsModule'},
    { path: 'species', loadChildren: './species/species.module#SpeciesModule'},
    { path: 'starships', loadChildren: './starships/starships.module#StarshipsModule'},
    { path: 'vehicles', loadChildren: './vehicles/vehicles.module#VehiclesModule'},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(pagesRoutes)],
  exports: [RouterModule]
}) 

export class PagesRoutingModule { }

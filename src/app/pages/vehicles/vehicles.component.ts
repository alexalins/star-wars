import { Component, OnInit } from '@angular/core';
import { Vehicles } from 'src/app/model/Vehicles';
import { VehiclesService } from 'src/app/services/vehicles.service';
import { environment } from 'src/environments/environment';
import { Films } from 'src/app/model/Films';
import { People } from 'src/app/model/People';
import { FilmsService } from 'src/app/services/films.service';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {
  public vehicles: Vehicles = new Vehicles();
  public peoples: People[] = [];
  public films: Films[] = [];

  constructor(private vehiclesService: VehiclesService,
    private peopleService: PeopleService,
    private filmsService: FilmsService) {
    this.getVehicle();
  }

  ngOnInit() {
  }

  async getVehicle(){
    this.vehicles = await this.vehiclesService.getVehicle();
    console.log(this.vehicles);
    for (let i of this.vehicles.films) {
      this.listFilms(i);
    }
    //
    for (let i of this.vehicles.pilots) {
      this.listPeople(i);
    }
  }

   //list
   async listFilms(urlFilms) {
    this.films.push(await this.filmsService.getFilmUrl(urlFilms));
  }

  async listPeople(urlPlanets) {
    this.peoples.push(await this.peopleService.listsPeople(urlPlanets));
  }

  //get
  getFilm(urlFilms){
    localStorage.setItem('url', urlFilms);
  }

  getPeople(urlPeople){
    localStorage.setItem('urlPeople', urlPeople);
  }
}

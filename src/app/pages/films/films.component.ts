import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../../services/films.service';
import { Films } from '../../model/Films';
import { Planets } from 'src/app/model/Planets';
import { People } from 'src/app/model/People';
import { Species } from 'src/app/model/Species';
import { Starships } from 'src/app/model/Starships';
import { Vehicles } from 'src/app/model/Vehicles';
import { PeopleService } from 'src/app/services/people.service';
import { PlanetsService } from 'src/app/services/planets.service';
import { SpeciesService } from 'src/app/services/species.service';
import { StarshipsService } from 'src/app/services/starships.service';
import { VehiclesService } from 'src/app/services/vehicles.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  public film: Films = new Films();
  public planets: Planets[] = [];
  public peoples: People[] = [];
  public species: Species[] = [];
  public starships: Starships[] = [];
  public vehicles: Vehicles[] = [];

  constructor(private filmsService: FilmsService,
    private peoplesService: PeopleService,
    private planetsService: PlanetsService,
    private speciesService: SpeciesService,
    private starShipsService: StarshipsService,
    private vehiclesService: VehiclesService) {
    this.getFilm();
  }

  ngOnInit() {
  }

  async getFilm() {
    this.film = await this.filmsService.getFilm();

    for (let i of this.film.characters) {
      this.listPeople(i);
    }
    //
    for (let i of this.film.planets) {
      this.listPlanets(i);
    }
    //
    for (let i of this.film.species) {
      this.listSpecies(i);
    }
    //
    for (let i of this.film.starships) {
      this.listStarShips(i);
    }
    //
    for (let i of this.film.vehicles) {
      this.listVehicles(i);
    }
  }

  //list
  async listPeople(urlPeople) {
    this.peoples.push(await this.peoplesService.listsPeople(urlPeople));
  }

  async listPlanets(urlPlanets) {
    this.planets.push(await this.planetsService.listPlanets(urlPlanets));
  }

  async listSpecies(urlSpecies) {
    this.species.push(await this.speciesService.listSpecies(urlSpecies));
  }

  async listStarShips(urlStarShips) {
    this.starships.push(await this.starShipsService.listStarships(urlStarShips));
  }

  async listVehicles(urlVehicles) {
    this.vehicles.push(await this.vehiclesService.listVehicles(urlVehicles));
  }

  //get

  getPeople(urlPeople){
    localStorage.setItem('urlPeople', urlPeople);
  }

  getPlanet(urlPlanet){
    localStorage.setItem('urlPlanet', urlPlanet);
  }

  getSpecie(urlSpecie){
    localStorage.setItem('urlSpecie', urlSpecie);
  }

  getStarShip(urlStarShip){
    localStorage.setItem('urlStarShip', urlStarShip);
  }

  getVehicle(urlVehicle){
    localStorage.setItem('urlVehicle', urlVehicle);
  }
}

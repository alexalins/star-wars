import { Component, OnInit } from '@angular/core';
import { People } from '../../model/People';
import { PeopleService } from '../../services/people.service';
import { Films } from 'src/app/model/Films';
import { Planets } from 'src/app/model/Planets';
import { Starships } from 'src/app/model/Starships';
import { Species } from 'src/app/model/Species';
import { Vehicles } from 'src/app/model/Vehicles';
import { FilmsService } from 'src/app/services/films.service';
import { SpeciesService } from 'src/app/services/species.service';
import { PlanetsService } from 'src/app/services/planets.service';
import { StarshipsService } from 'src/app/services/starships.service';
import { VehiclesService } from 'src/app/services/vehicles.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  public peoples: People = new People();
  public films: Films[] = [];
  public planets: Planets[] = [];
  public species: Species[] = [];
  public starships: Starships[] = [];
  public vehicles: Vehicles[] = [];

  constructor(private peopleService: PeopleService,
    private filmsService: FilmsService,
    private planetsService: PlanetsService,
    private speciesService: SpeciesService,
    private starShipsService: StarshipsService,
    private vehiclesService: VehiclesService) {
    this.getPoople();
  }

  ngOnInit() {
  }

  async getPoople() {
    this.peoples = await this.peopleService.getPeople();
    //
    this.listPlanets(this.peoples.homeworld);
    //
    for (let i of this.peoples.films) {
      this.listFilms(i);
    }
    //
    for (let i of this.peoples.species) {
      this.listSpecies(i);
    }
    //
    for (let i of this.peoples.starships) {
      this.listStarShips(i);
    }
    //
    for (let i of this.peoples.vehicles) {
      this.listVehicles(i);
    }
  }

  //list
  async listFilms(urlFilms) {
    this.films.push(await this.filmsService.getFilmUrl(urlFilms));
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
  getFilm(urlFilms){
    localStorage.setItem('url', urlFilms);
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

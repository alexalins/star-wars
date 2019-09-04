import { Component, OnInit } from '@angular/core';
import { Planets } from 'src/app/model/Planets';
import { PlanetsService } from 'src/app/services/planets.service';
import { People } from 'src/app/model/People';
import { Films } from 'src/app/model/Films';
import { PeopleService } from 'src/app/services/people.service';
import { FilmsService } from 'src/app/services/films.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {
  public planets: Planets = new Planets();
  public films: Films[] = [];
  public peoples: People[] = [];

  constructor(private peopleService: PeopleService,
    private filmsService: FilmsService,
    private planetsService: PlanetsService) {
    this.getPlanets();
  }

  ngOnInit() {
  }

  async getPlanets() {
    this.planets = await this.planetsService.getPlanet();

    for (let i of this.planets.films) {
      this.listFilms(i);
    }
    //
    for (let i of this.planets.residents) {
      this.listPeople(i);
    }
  }

  //list
  async listFilms(urlFilms) {
    this.films.push(await this.filmsService.getFilmUrl(urlFilms));
  }

  async listPeople(urlPeople) {
    this.peoples.push(await this.peopleService.listsPeople(urlPeople));
  }

  //get
  getFilm(urlFilms){
    localStorage.setItem('url', urlFilms);
  }

  getPeople(urlPeople){
    localStorage.setItem('urlPeople', urlPeople);
  }
}

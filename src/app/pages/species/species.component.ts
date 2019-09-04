import { Component, OnInit } from '@angular/core';
import { Species } from 'src/app/model/Species';
import { SpeciesService } from 'src/app/services/species.service';
import { Planets } from 'src/app/model/Planets';
import { Films } from 'src/app/model/Films';
import { People } from 'src/app/model/People';
import { FilmsService } from 'src/app/services/films.service';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})
export class SpeciesComponent implements OnInit {
  public species: Species = new Species();
  public planet: Planets = new Planets();
  public films: Films[] = [];
  public peoples: People[] = [];

  constructor(private speciesService: SpeciesService,
    private peopleService: PeopleService,
    private filmsService: FilmsService) {
    this.getSpecie();
  }

  ngOnInit() {
  }

  async getSpecie() {
    this.species = await this.speciesService.getSpecies();
    //
    this.listPlanet(this.species.homeworld);
    //
    for (let i of this.species.films) {
      this.listFilms(i);
    }
    //
    for (let i of this.species.people) {
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

  async listPlanet(urlPeople) {
    this.planet = await this.peopleService.listsPeople(urlPeople);
  }
  
  //get
  getFilm(urlFilms) {
    localStorage.setItem('url', urlFilms);
  }

  getPlanet(urlPlanet) {
    localStorage.setItem('urlPlanet', urlPlanet);
  }

  getPeople(urlPeople) {
    localStorage.setItem('urlPeople', urlPeople);
  }
}
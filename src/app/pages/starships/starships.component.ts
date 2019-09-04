import { Component, OnInit } from '@angular/core';
import { StarshipsService } from 'src/app/services/starships.service';
import { Starships } from 'src/app/model/Starships';
import { People } from 'src/app/model/People';
import { Films } from 'src/app/model/Films';
import { FilmsService } from 'src/app/services/films.service';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {
  public starships: Starships = new Starships();
  public peoples: People[] = [];
  public films: Films[] = [];

  constructor(private starShipsService: StarshipsService,
    private peopleService: PeopleService,
    private filmsService: FilmsService
    ) {
    this.getStarShip();
  }

  ngOnInit() {
  }

  async getStarShip(){
    this.starships = await this.starShipsService.getStarship();
    console.log(this.starships);
    //
    for (let i of this.starships.films) {
      this.listFilms(i);
    }
    //
    for (let i of this.starships.pilots) {
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

import { Component, OnInit } from '@angular/core';
import { Films } from 'src/app/model/Films';
import { FilmsService } from 'src/app/services/films.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private data: any;
  public films: Films[] = [];
  
  constructor(private filmsService: FilmsService) {
    this.listFilms();
  }

  ngOnInit() {
  }

  async listFilms() {
    this.data = await this.filmsService.listFilms();
    this.films = this.data['results'];
  }

  getFilm(url: string) {
    localStorage.setItem('url', url);
  }
}

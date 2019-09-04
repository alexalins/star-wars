import { Injectable, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Films } from '../model/Films';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {
  private url = environment.host + 'films';
  public urlFilm: string;

  constructor(private http: HttpClient) { }

  async listFilms() : Promise<Films>{
    return await this.http.get<Films>(this.url).toPromise();
  }

  async getFilm() : Promise<Films>{
    this.urlFilm = localStorage.getItem('url');
    return await this.http.get<Films>(this.urlFilm).toPromise();
  }

  async getFilmUrl(url: string) : Promise<Films>{
    return await this.http.get<Films>(url).toPromise();
  }
}

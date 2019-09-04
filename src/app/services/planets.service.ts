import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Planets } from '../model/Planets';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {
  private url: string;

  constructor(private http: HttpClient) { }

  async listPlanets(url: string) : Promise<Planets>{
    return await this.http.get<Planets>(url).toPromise();
  }

  async getPlanet() : Promise<Planets>{
    this.url = localStorage.getItem('urlPlanet');
    return await this.http.get<Planets>(this.url).toPromise();
  }
}

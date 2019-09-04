import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Starships } from '../model/Starships';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StarshipsService {
  private url: string;

  constructor(private http: HttpClient) { }

  async listStarships(url: string) : Promise<Starships>{
    return await this.http.get<Starships>(url).toPromise();
  }

  async getStarship() : Promise<Starships>{
    this.url = localStorage.getItem('urlStarShip');
    return await this.http.get<Starships>(this.url).toPromise();
  }
}

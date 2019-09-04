import { Injectable } from '@angular/core';
import { Species } from '../model/Species';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpeciesService {
  private url: string;

  constructor(private http: HttpClient) { }

  async listSpecies(url) : Promise<Species>{
    return await this.http.get<Species>(url).toPromise();
  }

  async getSpecies() : Promise<Species>{
    this.url = localStorage.getItem('urlSpecie')
    return await this.http.get<Species>(this.url).toPromise();
  }
}

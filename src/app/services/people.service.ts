import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { People } from '../model/People';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private url: string;
  constructor(private http: HttpClient) { }

  async listsPeople(url: string) : Promise<People>{
    return await this.http.get<People>(url).toPromise();
  }

  async getPeople() : Promise<People>{
    this.url = localStorage.getItem('urlPeople');
    return await this.http.get<People>(this.url).toPromise();
  }
}

import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Vehicles } from '../model/Vehicles';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {
  private url: string;

  constructor(private http: HttpClient) { }

  async listVehicles(url: string) : Promise<Vehicles>{
    return await this.http.get<Vehicles>(url).toPromise();
  }

  async getVehicle() : Promise<Vehicles>{
    this.url = localStorage.getItem('urlVehicle');
    return await this.http.get<Vehicles>(this.url).toPromise();
  }
}

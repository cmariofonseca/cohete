import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Planets } from '../models/planets.model';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})

export class PlanetService {

  apiPlanets: string;

  constructor(private http: HttpClient) {
    this.apiPlanets = 'http://demo0761779.mockable.io/angularspaceship/planets';
    /*this.apiPlanets = 'http://jsonplaceholder.typicode.com/albums';*/
  }

  getData(): Observable<Array<Planets>> {
    return this.http.get<Array<Planets>>(this.apiPlanets);
  }

}

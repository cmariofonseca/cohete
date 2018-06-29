import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Planets } from '../models/planets.model';
import { Object } from '../models/planets.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PlanetService {

  apiPlanets: string;
  private $receiveModelValues = new Subject<Planets>();
  $modelValues: any;

  constructor(private http: HttpClient) {
    this.apiPlanets = 'http://demo0761779.mockable.io/angularspaceship/planets';
    this.$modelValues = this.$receiveModelValues.asObservable();
  }

  getPlanetas() {
    return this.http.get<Object>(this.apiPlanets);
  }

  announcePlanet(planet: Planets) {
    this.$receiveModelValues.next(planet);
  }

}

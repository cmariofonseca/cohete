import { Component, OnInit } from '@angular/core';
import { Planets } from '../../models/planets.model';
import { PlanetService } from '../../services/planet.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-planetas',
  templateUrl: './planetas.component.html',
  styleUrls: ['./planetas.component.css']
})

export class PlanetasComponent implements OnInit {

  planets: Planets[];
  selectedPlanet: Planets;
  message: string;
  planet = 'X';
  degrees = 0;
  img = '';
  subscription: Subscription;

  constructor(private ps: PlanetService, private ar: ActivatedRoute, private l: Location) {
    this.subscription = ps.$modelValues.subscribe(planet => {
        this.modelValues(planet);
      });
  }

  loadPlanet(): void {
    const PLANET = this.ar.snapshot.paramMap.get('planet');
    if (PLANET) {
      const SELECTED = this.planets.filter(d => d.planet === PLANET);
      if (SELECTED.length !== 0) {
        this.selectPlanet(SELECTED[0]);
      }
    }
  }

  setPlanetas(images) {
    const ARR = [];
    Object.keys(images).forEach((key, index) => {
      const PLANET = { planet: key, img: images[key].img, degrees: +images[key].degrees } as Planets;
      ARR.push(PLANET);
    });
    this.planets = ARR;
    this.loadPlanet();
  }

  selectPlanet(planet) {
    this.selectedPlanet = planet;
    this.ps.announcePlanet(planet);
    this.l.go(`/planetas/${planet.planet}`);
  }

  modelValues(planet) {
    this.planet = planet.planet;
    this.degrees = planet.degrees;
    this.img = planet.img;
  }

  ngOnInit() {
    this.ps.getPlanetas().subscribe(d => this.setPlanetas(d.images));
  }

}

import { Component, OnInit } from '@angular/core';
import { Planets } from '../../models/planets.model';
import { PlanetService } from '../../services/planet.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-planetas',
  templateUrl: './planetas.component.html',
  styleUrls: ['./planetas.component.css']
})

export class PlanetasComponent implements OnInit {

  data$: Observable<Array<Planets>>;

  constructor(private ps: PlanetService) { }

  getData(): void {
    this.data$ = this.ps.getData();
  }

  /*ngOnInit() {
    this.ps.getData().subscribe(d => this.data = d);
  }*/

  ngOnInit() {
  }

}

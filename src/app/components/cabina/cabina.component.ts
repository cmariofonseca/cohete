import { Component, OnInit } from '@angular/core';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-cabina',
  templateUrl: './cabina.component.html',
  styleUrls: ['./cabina.component.css']
})

export class CabinaComponent implements OnInit {

  constructor(public cs: CounterService) { }

  ngOnInit() {
  }

}

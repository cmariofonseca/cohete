import { Component, OnInit } from '@angular/core';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-motor',
  templateUrl: './motor.component.html',
  styleUrls: ['./motor.component.css']
})

export class MotorComponent implements OnInit {

  constructor(private cs: CounterService) { }

  public trigger() {
    this.cs.countdown();
  }

  ngOnInit() {

  }

}

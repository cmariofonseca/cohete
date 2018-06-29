import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CounterService {

  count = 10;
  timer: any;

  constructor() { }

  public countdown() {
    this.timer = setInterval(() => {
      this.count -= 1;
      if (this.count === -1) {
        clearInterval(this.timer);
        this.count = 10;
      }
    }, 1000);
  }

}

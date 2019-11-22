import { Injectable } from '@angular/core';

@Injectable()
export class StopsGeneratorService {

  currLat = 52.0;
  currLon = 0.0;
  numberOfStops = 500;

  public generate() {
    let stops = [];
    for (let i = 0; i < this.numberOfStops; i++) {
      this.currLat += Math.random() * 2 - 1;
      this.currLon += Math.random() * 2 - 1;
      stops.push({ latitude: this.currLat, longitude: this.currLon });
    }

    return stops;
  }
}
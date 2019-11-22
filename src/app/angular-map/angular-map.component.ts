import { Component, OnInit } from '@angular/core';
import { StopsGeneratorService } from '../stops-generator.service'
import {
  ChangeDetectionStrategy,
  DoCheck,
} from '@angular/core';

@Component({
  selector: 'app-angular-map',
  templateUrl: './angular-map.component.html',
  styleUrls: ['./angular-map.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class AngularMapComponent implements OnInit, DoCheck {

  stops1 = [];
  stops2 = [];

  constructor(private stopsGenerator: StopsGeneratorService){}

  ngOnInit() {
    this.stops1 = this.stopsGenerator.generate();
    this.stops2 = this.stopsGenerator.generate();
  }

  ngDoCheck() {
    console.log("AngularMapComponent checked");
  }
}
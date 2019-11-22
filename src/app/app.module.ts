import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AngularOpenlayersModule } from 'ngx-openlayers';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { VanillaMapComponent } from './vanilla-map/vanilla-map.component';
import { AngularMapComponent } from './angular-map/angular-map.component';
import { StopsGeneratorService } from './stops-generator.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AngularOpenlayersModule ],
  declarations: [ AppComponent, HelloComponent, VanillaMapComponent, AngularMapComponent ],
  bootstrap:    [ AppComponent ],
  providers: [StopsGeneratorService]
})
export class AppModule { }

// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Routes
import { APP_ROUTING } from './routes/app.routes';

// Services
import { PlanetService } from './services/planet.service';

// Components
import { AppComponent } from './app.component';
import { FuselajeComponent } from './components/fuselaje/fuselaje.component';
import { CabinaComponent } from './components/cabina/cabina.component';
import { MotorComponent } from './components/motor/motor.component';
import { ControlComponent } from './components/control/control.component';
import { PlanetasComponent } from './components/planetas/planetas.component';

@NgModule({
  declarations: [
    AppComponent,
    FuselajeComponent,
    CabinaComponent,
    MotorComponent,
    ControlComponent,
    PlanetasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [
    PlanetService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

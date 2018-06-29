import { RouterModule, Routes } from '@angular/router';
import { FuselajeComponent } from '../components/fuselaje/fuselaje.component';
import { CabinaComponent } from '../components/cabina/cabina.component';
import { MotorComponent } from '../components/motor/motor.component';
import { ControlComponent } from '../components/control/control.component';
import { PlanetasComponent } from '../components/planetas/planetas.component';

const APP_ROUTES: Routes = [
  { path: '', component: FuselajeComponent },
  { path: 'inicio', component: FuselajeComponent },
  { path: 'cabina', component: CabinaComponent },
  { path: 'motor', component: MotorComponent },
  { path: 'control', component: ControlComponent },
  { path: 'planetas', component: PlanetasComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

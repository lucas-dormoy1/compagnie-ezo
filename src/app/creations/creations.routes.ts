import { Routes } from '@angular/router';
import { CreationsComponent } from './creations.component';
import { MoonSoulsComponent } from './moon-souls/moon-souls.component';
import { SevenTriesComponent } from './seven-tries/seven-tries.component';
import { MedusesComponent } from './meduses/meduses.component';
import { HorizonsCaillouxComponent } from './horizons-cailloux/horizons-cailloux.component';

export const CREATIONS_ROUTES: Routes = [
  { path: '', component: CreationsComponent },
  { path: 'moon-souls', component: MoonSoulsComponent },
  { path: 'seven-tries', component: SevenTriesComponent },
  { path: 'les-meduses-ne-nagent-jamais-seules', component: MedusesComponent },
  { path: 'l-horizon-est-fait-de-petits-cailloux', component: HorizonsCaillouxComponent },
];

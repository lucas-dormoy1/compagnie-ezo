import { Routes } from '@angular/router';
import { ProjectsComponent } from './projects.component';
import { PluieMontchalComponent } from './pluie-montchal/pluie-montchal.component';
import { TuningInToTheSensesComponent } from './tuning-in-to-the-senses/tuning-in-to-the-senses.component';
import { TuningAthenesComponent } from './tuning-in-to-the-senses/athenes/athenes.component';
import { TuningSeedComponent } from './tuning-in-to-the-senses/seed/seed.component';
import { JeunePublicComponent } from './jeune-public/jeune-public.component';
import { MuseeComponent } from './musee/musee.component';

export const PROJECTS_ROUTES: Routes = [
  { path: '', component: ProjectsComponent },
  { path: 'dialogue-avec-l-œuvre-pluie-de-montchal', component: PluieMontchalComponent },
  { path: 'tuning-in-to-the-senses', component: TuningInToTheSensesComponent },
  { path: 'tuning-in-to-the-senses/athenes', component: TuningAthenesComponent },
  { path: 'tuning-in-to-the-senses/seed', component: TuningSeedComponent },
  { path: 'jeune-public', component: JeunePublicComponent },
  { path: 'performance-in-situ-musee', component: MuseeComponent },
];

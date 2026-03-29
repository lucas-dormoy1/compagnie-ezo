import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects.component';
import { PluieMontchalComponent } from './pluie-montchal/pluie-montchal.component';
import { TuningInToTheSensesComponent } from './tuning-in-to-the-senses/tuning-in-to-the-senses.component';
import { JeunePublicComponent } from './jeune-public/jeune-public.component';
import { MuseeComponent } from './musee/musee.component';

const routes: Routes = [
  { path: '', component: ProjectsComponent },
  { path: 'dialogue-avec-l-œuvre-pluie-de-montchal', component: PluieMontchalComponent },
  { path: 'tuning-in-to-the-senses', component: TuningInToTheSensesComponent },
  { path: 'jeune-public', component: JeunePublicComponent },
  { path: 'performance-in-situ-musee', component: MuseeComponent },
];

@NgModule({
  declarations: [
    ProjectsComponent,
    PluieMontchalComponent,
    TuningInToTheSensesComponent,
    JeunePublicComponent,
    MuseeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
})
export class ProjectsModule {}

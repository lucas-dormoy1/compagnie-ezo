import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { CreationsComponent } from './creations.component';
import { HorizonsCaillouxComponent } from './horizons-cailloux/horizons-cailloux.component';
import { ArtistModalComponent } from './meduses/artist-modal/artist-modal.component';
import { MedusesComponent } from './meduses/meduses.component';
import { MoonSoulsComponent } from './moon-souls/moon-souls.component';
import { SevenTriesComponent } from './seven-tries/seven-tries.component';

const routes: Routes = [
  { path: '', component: CreationsComponent },
  { path: 'moon-souls', component: MoonSoulsComponent },
  { path: 'seven-tries', component: SevenTriesComponent },
  { path: 'les-meduses-ne-nagent-jamais-seules', component: MedusesComponent },
  { path: 'l-horizon-est-fait-de-petits-cailloux', component: HorizonsCaillouxComponent },
];

@NgModule({
  declarations: [
    CreationsComponent,
    HorizonsCaillouxComponent,
    MedusesComponent,
    ArtistModalComponent,
    SevenTriesComponent,
    MoonSoulsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatDialogModule,
  ],
})
export class CreationsModule {}

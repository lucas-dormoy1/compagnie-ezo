import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from "@angular/forms";
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { CreationsComponent } from './creations/creations.component';
import { HorizonsCaillouxComponent } from './creations/horizons-cailloux/horizons-cailloux.component';
import { ArtistModalComponent } from './creations/meduses/artist-modal/artist-modal.component';
import { MedusesComponent } from './creations/meduses/meduses.component';
import { HeaderComponent } from './header/header.component';
import { CreationsMenuComponent } from './home-menu/creations-menu/creations-menu.component';
import { HomeMenuComponent } from './home-menu/home-menu.component';
import { ProjectsMenuComponent } from './home-menu/projects-menu/projects-menu.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './home/news/news.component';
import { PresentationComponent } from './presentation/presentation.component';
import { PluieMontchalComponent } from './projects/pluie-montchal/pluie-montchal.component';
import { ProjectsComponent } from './projects/projects.component';
import { KnowMoreComponent } from './shared/know-more/know-more.component';
import { SevenTriesComponent } from './creations/seven-tries/seven-tries.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'about', component: PresentationComponent},
  { path: 'projects', component: ProjectsComponent},
  { path: 'creations', component: CreationsComponent},
  { path: 'l-horizon-est-fait-de-petits-cailloux', component: HorizonsCaillouxComponent},
  { path: 'les-meduses-ne-nagent-jamais-seules', component: MedusesComponent},
  { path: 'seven-tries', component: SevenTriesComponent},
  { path: 'dialogue-avec-l-œuvre-pluie-de-montchal', component: PluieMontchalComponent},
  { path: 'contact', component: ContactComponent},
  { path: '**', redirectTo: '/home', pathMatch: 'full' },

];

@NgModule({
  declarations: [
    AppComponent,
    PresentationComponent,
    HomeComponent,
    ProjectsComponent,
    HorizonsCaillouxComponent,
    PluieMontchalComponent,
    HomeMenuComponent,
    ProjectsMenuComponent,
    HeaderComponent,
    NewsComponent,
    CreationsComponent,
    CreationsMenuComponent,
    MedusesComponent,
    ContactComponent,
    ArtistModalComponent,
    KnowMoreComponent,
    SevenTriesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    FormsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from "@angular/forms";
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CreationsComponent } from './creations/creations.component';
import { HorizonsCaillouxComponent } from './creations/horizons-cailloux/horizons-cailloux.component';
import { MedusesComponent } from './creations/meduses/meduses.component';
import { HeaderComponent } from './header/header.component';
import { CreationsMenuComponent } from './home-menu/creations-menu/creations-menu.component';
import { HomeMenuComponent } from './home-menu/home-menu.component';
import { ProjectsMenuComponent } from './home-menu/projects-menu/projects-menu.component';
import { HomeComponent } from './home/home.component';
import { NewsHeaderComponent } from './home/news-header/news-header.component';
import { NewsItemComponent } from './home/news/news-item/news-item.component';
import { NewsComponent } from './home/news/news.component';
import { PresentationComponent } from './presentation/presentation.component';
import { AislingComponent } from './projects/aisling/aisling.component';
import { FluxQuiPortentComponent } from './projects/flux-qui-portent/flux-qui-portent.component';
import { KaravelComponent } from './projects/karavel/karavel.component';
import { OneBreathComponent } from './projects/one-breath/one-breath.component';
import { PluieMontchalComponent } from './projects/pluie-montchal/pluie-montchal.component';
import { ProjectsComponent } from './projects/projects.component';
import { SolosForRealComponent } from './projects/solos-for-real/solos-for-real.component';
import { WhoamiComponent } from './projects/whoami/whoami.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'about', component: PresentationComponent},
  { path: 'projects', component: ProjectsComponent},
  { path: 'creations', component: CreationsComponent},
  { path: 'l-horizon-est-fait-de-petits-cailloux', component: HorizonsCaillouxComponent},
  { path: 'dialogue-avec-l-œuvre-pluie-de-montchal', component: PluieMontchalComponent},
  { path: 'whoami', component: WhoamiComponent},
  { path: 'aisling', component: AislingComponent},
  { path: 'solos-for-real', component: SolosForRealComponent},
  { path: 'ces-flux-qui-nous-portent-et-nous-emportent', component: FluxQuiPortentComponent},
  { path: 'festival-karavel', component: KaravelComponent},
  { path: 'one-breath', component: OneBreathComponent},
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
    WhoamiComponent,
    AislingComponent,
    SolosForRealComponent,
    FluxQuiPortentComponent,
    KaravelComponent,
    OneBreathComponent,
    HomeMenuComponent,
    ProjectsMenuComponent,
    HeaderComponent,
    NewsHeaderComponent,
    NewsComponent,
    NewsItemComponent,
    CreationsComponent,
    CreationsMenuComponent,
    MedusesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

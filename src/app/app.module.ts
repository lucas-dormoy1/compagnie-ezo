import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectsDropdownComponent } from './projects-dropdown/projects-dropdown.component';
import { HorizonsCaillouxComponent } from './projects/horizons-cailloux/horizons-cailloux.component';
import { PluieMontchalComponent } from './projects/pluie-montchal/pluie-montchal.component';
import { WhoamiComponent } from './projects/whoami/whoami.component';
import { AislingComponent } from './projects/aisling/aisling.component';
import { SolosForRealComponent } from './projects/solos-for-real/solos-for-real.component';
import { FluxQuiPortentComponent } from './projects/flux-qui-portent/flux-qui-portent.component';
import { KaravelComponent } from './projects/karavel/karavel.component';
import { OneBreathComponent } from './projects/one-breath/one-breath.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { HomeMenuComponent } from './home-menu/home-menu.component';
import { FormsModule } from "@angular/forms";
import { ProjectsMenuComponent } from './home-menu/projects-menu/projects-menu.component';
import { HeaderComponent } from './header/header.component';
import { NewsHeaderComponent } from './home/news-header/news-header.component';
import { NewsComponent } from './home/news/news.component';
import { NewsItemComponent } from './home/news/news-item/news-item.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'projects', component: ProjectsComponent},
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
    AboutComponent,
    HomeComponent,
    ProjectsComponent,
    ProjectsDropdownComponent,
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
    NewsItemComponent
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

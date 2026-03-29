import { NgModule } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CreationsMenuComponent } from './home-menu/creations-menu/creations-menu.component';
import { HomeMenuComponent } from './home-menu/home-menu.component';
import { ProjectsMenuComponent } from './home-menu/projects-menu/projects-menu.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './home/news/news.component';
import { MatKnowMoreComponent } from './shared/mat-know-more/mat-know-more.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', loadChildren: () => import('./presentation/presentation.module').then(m => m.PresentationModule) },
  { path: 'creations', loadChildren: () => import('./creations/creations.module').then(m => m.CreationsModule) },
  { path: 'projects', loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule) },
  { path: 'workshops', loadChildren: () => import('./workshops/workshops.module').then(m => m.WorkshopsModule) },
  { path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeMenuComponent,
    ProjectsMenuComponent,
    HeaderComponent,
    NewsComponent,
    CreationsMenuComponent,
    MatKnowMoreComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    NgOptimizedImage,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

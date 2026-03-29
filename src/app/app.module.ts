import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', loadComponent: () => import('./presentation/presentation.component').then(m => m.PresentationComponent) },
  { path: 'creations', loadChildren: () => import('./creations/creations.routes').then(m => m.CREATIONS_ROUTES) },
  { path: 'projects', loadChildren: () => import('./projects/projects.routes').then(m => m.PROJECTS_ROUTES) },
  { path: 'workshops', loadComponent: () => import('./workshops/workshops.component').then(m => m.WorkshopsComponent) },
  { path: 'contact', loadComponent: () => import('./contact/contact.component').then(m => m.ContactComponent) },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    BrowserAnimationsModule,
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

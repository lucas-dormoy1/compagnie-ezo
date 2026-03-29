import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PresentationComponent } from './presentation.component';

const routes: Routes = [
  { path: '', component: PresentationComponent },
];

@NgModule({
  declarations: [PresentationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
})
export class PresentationModule {}

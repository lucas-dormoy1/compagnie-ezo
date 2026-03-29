import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkshopsComponent } from './workshops.component';

const routes: Routes = [
  { path: '', component: WorkshopsComponent },
];

@NgModule({
  declarations: [WorkshopsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
})
export class WorkshopsModule {}

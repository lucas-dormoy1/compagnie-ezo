import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Router } from '@angular/router';

@Component({
    selector: 'app-workshops',
    templateUrl: './workshops.component.html',
    styleUrls: ['./workshops.component.scss'],
    standalone: true,
    imports: [NgOptimizedImage],
})
export class WorkshopsComponent {

  constructor(public router: Router) { }
}

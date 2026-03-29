import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-workshops',
    templateUrl: './workshops.component.html',
    styleUrls: ['./workshops.component.scss'],
    standalone: false
})
export class WorkshopsComponent {

  constructor(public router: Router) { }
}

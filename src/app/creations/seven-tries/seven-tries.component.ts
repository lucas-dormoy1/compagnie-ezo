import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-seven-tries',
    templateUrl: './seven-tries.component.html',
    styleUrls: ['./seven-tries.component.scss'],
    standalone: false
})
export class SevenTriesComponent {

  constructor(public router: Router) { }
}

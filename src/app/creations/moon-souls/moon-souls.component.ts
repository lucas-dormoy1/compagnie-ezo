import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-moon-souls',
    templateUrl: './moon-souls.component.html',
    styleUrls: ['./moon-souls.component.scss'],
    standalone: false
})
export class MoonSoulsComponent {

  constructor(public router: Router) { }
}

import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Router } from '@angular/router';

@Component({
    selector: 'app-moon-souls',
    templateUrl: './moon-souls.component.html',
    styleUrls: ['./moon-souls.component.scss'],
    standalone: true,
    imports: [NgOptimizedImage],
})
export class MoonSoulsComponent {

  constructor(public router: Router) { }
}

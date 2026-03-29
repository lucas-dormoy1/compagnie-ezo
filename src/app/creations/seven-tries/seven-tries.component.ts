import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Router } from '@angular/router';

@Component({
    selector: 'app-seven-tries',
    templateUrl: './seven-tries.component.html',
    styleUrls: ['./seven-tries.component.scss'],
    standalone: true,
    imports: [NgOptimizedImage],
})
export class SevenTriesComponent {

  constructor(public router: Router) { }
}

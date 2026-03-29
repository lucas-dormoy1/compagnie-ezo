import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Router } from '@angular/router';
import { SupportersComponent } from '../../shared/supporters/supporters.component';

@Component({
    selector: 'app-horizons-cailloux',
    templateUrl: './horizons-cailloux.component.html',
    styleUrls: ['./horizons-cailloux.component.scss'],
    standalone: true,
    imports: [NgOptimizedImage, SupportersComponent],
})
export class HorizonsCaillouxComponent {

  constructor(public router: Router) { }
}

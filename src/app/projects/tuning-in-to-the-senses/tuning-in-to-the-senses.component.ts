import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-tuning-in-to-the-senses',
    templateUrl: './tuning-in-to-the-senses.component.html',
    styleUrls: ['./tuning-in-to-the-senses.component.scss'],
    standalone: true,
    imports: [NgOptimizedImage, RouterLink],
})
export class TuningInToTheSensesComponent {
}

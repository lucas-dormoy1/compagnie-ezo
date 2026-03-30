import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
    selector: 'app-tuning-seed',
    templateUrl: './seed.component.html',
    styleUrls: ['./seed.component.scss'],
    standalone: true,
    imports: [NgOptimizedImage],
})
export class TuningSeedComponent {
}

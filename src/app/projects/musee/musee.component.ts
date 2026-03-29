import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
    selector: 'app-musee',
    templateUrl: './musee.component.html',
    styleUrls: ['./musee.component.scss'],
    standalone: true,
    imports: [NgOptimizedImage],
})
export class MuseeComponent {
}

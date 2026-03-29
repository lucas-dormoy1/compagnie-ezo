import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-creations',
    templateUrl: './creations.component.html',
    styleUrls: ['./creations.component.scss'],
    standalone: true,
    imports: [NgOptimizedImage, RouterLink],
})
export class CreationsComponent {
}

import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { SupportersComponent } from '../../shared/supporters/supporters.component';

@Component({
    selector: 'app-musee',
    templateUrl: './musee.component.html',
    styleUrls: ['./musee.component.scss'],
    standalone: true,
    imports: [NgOptimizedImage, SupportersComponent],
})
export class MuseeComponent {
}

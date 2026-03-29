import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { SupportersComponent } from '../../shared/supporters/supporters.component';

@Component({
    selector: 'app-seven-tries',
    templateUrl: './seven-tries.component.html',
    styleUrls: ['./seven-tries.component.scss'],
    standalone: true,
    imports: [NgOptimizedImage, SupportersComponent],
})
export class SevenTriesComponent {
}

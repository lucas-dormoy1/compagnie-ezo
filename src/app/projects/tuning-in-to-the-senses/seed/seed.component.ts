import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { SupportersComponent } from '../../../shared/supporters/supporters.component';

@Component({
    selector: 'app-tuning-seed',
    templateUrl: './seed.component.html',
    styleUrls: ['./seed.component.scss'],
    standalone: true,
    imports: [NgOptimizedImage, SupportersComponent],
})
export class TuningSeedComponent {
}

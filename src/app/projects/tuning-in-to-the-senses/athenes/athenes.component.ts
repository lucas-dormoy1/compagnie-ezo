import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { SupportersComponent } from '../../../shared/supporters/supporters.component';

@Component({
    selector: 'app-tuning-athenes',
    templateUrl: './athenes.component.html',
    styleUrls: ['./athenes.component.scss'],
    standalone: true,
    imports: [NgOptimizedImage, SupportersComponent],
})
export class TuningAthenesComponent {
}

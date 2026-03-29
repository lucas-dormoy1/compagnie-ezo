import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { SupportersComponent } from '../../shared/supporters/supporters.component';

@Component({
    selector: 'app-moon-souls',
    templateUrl: './moon-souls.component.html',
    styleUrls: ['./moon-souls.component.scss'],
    standalone: true,
    imports: [NgOptimizedImage, SupportersComponent],
})
export class MoonSoulsComponent {
}

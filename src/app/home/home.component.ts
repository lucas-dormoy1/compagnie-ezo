import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { NewsComponent } from './news/news.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: true,
    imports: [NgOptimizedImage, NewsComponent],
})
export class HomeComponent {
}

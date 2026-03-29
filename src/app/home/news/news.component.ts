import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatKnowMoreComponent } from '../../shared/mat-know-more/mat-know-more.component';

@Component({
    selector: 'app-news',
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.scss'],
    standalone: true,
    imports: [NgOptimizedImage, MatCardModule, MatKnowMoreComponent],
})
export class NewsComponent {
  public seedButton: string = $localize`Informations SEED & ateliers`;
}

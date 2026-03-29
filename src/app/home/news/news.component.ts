import { Component } from '@angular/core';

@Component({
    selector: 'app-news',
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.scss'],
    standalone: false
})
export class NewsComponent {
  public seedButton: string = $localize`Informations SEED & ateliers`;
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {

  public getSignUpText(): string {
    return $localize`S'inscrire`;
  }
}

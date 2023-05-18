import { Component, Input } from '@angular/core';
import { NewsItem } from '../news.component';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})
export class NewsItemComponent {
  @Input()
  item: NewsItem | null  = null;

  @Input()
  shouldReverseImage: boolean = false;
}

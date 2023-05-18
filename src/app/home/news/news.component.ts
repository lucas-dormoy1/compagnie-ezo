import { Component } from '@angular/core';

export interface NewsItem {
  title: string,
  subtitle: string,
  imgPath: string,
  isReversedImage : boolean
}

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {

  items : NewsItem[] = [
    {
      title: "Présentation du solo 'l'Horizon est fait de petits cailloux",
      subtitle: "2023",
      imgPath: "assets/home/news1.jpg",
      isReversedImage: false
    },
    {
      title: "Internationales Sole Tanz Theater Festival Stuttgart",
      subtitle: "Solo sélectionné pour la 27ème édition en mars 2023",
      imgPath: "assets/home/news2.jpg",
      isReversedImage: true
    },
    {
      title: "Ateliers avec passeurs de danse",
      subtitle: "Présentation du solo et atelier autour de la notion de rupture en composition chorégraphique.",
      imgPath: "assets/home/news3.jpg",
      isReversedImage: false
    }
  ]
}

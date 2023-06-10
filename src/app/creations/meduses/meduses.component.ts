import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ArtistModalComponent } from './artist-modal/artist-modal.component';

@Component({
  selector: 'app-meduses',
  templateUrl: './meduses.component.html',
  styleUrls: ['./meduses.component.scss']
})
export class MedusesComponent implements OnInit {

  private imagePathBase: string = "assets/creations/meduses/artists/"; 
  public artists: Artist[] = [
    {
      firstName: "Yumio",
      lastName: "Chanoki",
      description: ["Salut moi c'est Yumio"],
      imagePath: "yumio.JPG"
    },
    {
      firstName: "Guillaume",
      lastName: "Lemoine",
      description: ["Danseur-interprète et performer freelance travaillant en Europe. Son parcours atypique commence par l’architecture qu’il étudie à l’école Paris-Malaquais entre 2013 et 2018. Période durant laquelle il se familiarise avec la performance artistique et ses possibles en termes d’interactions de l’objet scénographique et du corps.",
                    "Plus tard, en parallèle d’une formation au Conservatoire de Créteil en danse Jazz, il poursuit une démarche de recherche par le biais du département Danse de l’Université de Paris 8 où il valide une licence en Arts du Spectacle option Danse en 2019. Élargissant ainsi ses connaissances chorégraphiques, il s’épanouit dans le travail d’analyse intersectionnelle, liant lecture du geste, histoire, anthropologie et philosophie.",
                    "Après deux années de formations de danseur-interprète plus approfondies au sein du CFA Danse Chant Comédie de Paris, suivies d’une année de professionnalisation dans le programme de la compagnie Berlinoise DART, il travail aujourd’hui en tant que danseur contemporain pour divers projets entre l’Allemagne et la France.",
                    "Il démontre son goût prononcé pour les techniques d’improvisation et de composition instantanée en mêlant la diversité des potentiels de l’écriture contemporaine, aux fondements de la culture Jazz, et la richesse des sonorités de musiques de tous styles et époques, qu’il aime entretenir et renouveler dans ses possibilités infinies, sa créativité et son mouvement.",
                    "En parallèle de ses expériences en tant qu’artiste chorégraphique avec Fabio Liberti, Human Fields, Eva Papadopoulos et Armelle Cornillon, il s’intéresse aussi aux aspects pédagogiques et à l’accompagnement du danseur professionnel en préparant ses diplômes d’État de professeur de danse en Jazz et Contemporain, ainsi qu’en se formant à la pratique du Shiatsu thérapeutique.",
                    "Il rejoint en 2023 en tant qu'interprète la compagnie EZO pour la création Les méduses ne nagent jamais seules."],
      imagePath: "guillaume.JPG"
    },
    {
      firstName: "Jérôme",
      lastName: "Février",
      description: ["Jérôme Février naît en Belgique en 2001. Il commence la danse à l’âge de 5 ans. Il se tourne d’abord vers la danse classique dans une école privée à Liège. Il se perfectionne dans ce domaine durant de nombreux stages à l’Opera de Paris, à la Royal ballet  school de Londres ou encore à l’Ecole royale d’Anvers. Il fait ses humanités en mathématique et science à l’Athénée royale Air pur de Seraing en parallèle de ses cours de danse. Il découvre et commence à s’intéresser à la danse contemporaine en intégrant le Ballet junior de Genève en 2019.",
                    "Il danse de nombreuses pièces de chorégraphes variés comme Noa Zuk, Stijn Celis, Marcos Morau, Hofesch Schechter, Cindy Van Acker ou encore Maud Lepladec et participe à des créations de Vincent Dunoyer et de Ioanis Mandafounis . Il performe aussi au festival Antigel dans une création de Perrine Valli en 2020 et pour Pauline Huguet au musée d’Histoire naturelle de Genève en 2022. Suite à ses études de danse, il participe à une création de Jeanne Garcia et Matteo Lochu (And Now It’s Done) dansée au festival Le temps d’aimer la danse à Biarritz et intègre le Kameleon dance ensemble. En 2023 il danse ainsi SE BAT NA KAR de Nicolas Van de Brande et participe au Spectacle Mille et une danses de Thomas Lebrun au Palais des Beaux arts de Charleroi.",
                    "Il s’intéresse aussi à la chorégraphie et crée en 2020 une petite pièce de 10 min s’appelant Pi. Il participera cette année à la nouvelle création Les méduses ne nagent jamais seules de la cie Ezo chorégraphiée par Estelle Bezombes."],
      imagePath: "jerome.JPG"
    },
    {
      firstName: "Mathilde",
      lastName: "Tordjeman",
      description: ["Danseur-interprète et performer freelance travaillant en Europe. Son parcours atypique commence par l’architecture qu’il étudie à l’école Paris-Malaquais entre 2013 et 2018. Période durant laquelle il se familiarise avec la performance artistique et ses possibles en termes d’interactions de l’objet scénographique et du corps.",
                    "Plus tard, en parallèle d’une formation au Conservatoire de Créteil en danse Jazz, il poursuit une démarche de recherche par le biais du département Danse de l’Université de Paris 8 où il valide une licence en Arts du Spectacle option Danse en 2019. Élargissant ainsi ses connaissances chorégraphiques, il s’épanouit dans le travail d’analyse intersectionnelle, liant lecture du geste, histoire, anthropologie et philosophie.",
                    "Après deux années de formations de danseur-interprète plus approfondies au sein du CFA Danse Chant Comédie de Paris, suivies d’une année de professionnalisation dans le programme de la compagnie Berlinoise DART, il travail aujourd’hui en tant que danseur contemporain pour divers projets entre l’Allemagne et la France.",
                    "Il démontre son goût prononcé pour les techniques d’improvisation et de composition instantanée en mêlant la diversité des potentiels de l’écriture contemporaine, aux fondements de la culture Jazz, et la richesse des sonorités de musiques de tous styles et époques, qu’il aime entretenir et renouveler dans ses possibilités infinies, sa créativité et son mouvement.",
                    "En parallèle de ses expériences en tant qu’artiste chorégraphique avec Fabio Liberti, Human Fields, Eva Papadopoulos et Armelle Cornillon, il s’intéresse aussi aux aspects pédagogiques et à l’accompagnement du danseur professionnel en préparant ses diplômes d’État de professeur de danse en Jazz et Contemporain, ainsi qu’en se formant à la pratique du Shiatsu thérapeutique.",
                    "Il rejoint en 2023 en tant qu'interprète la compagnie EZO pour la création Les méduses ne nagent jamais seules."],
      imagePath: "mathilde.JPG"
    },
    {
      firstName: "Adriès",
      lastName: "Sofi",
      description: ["Danseur-interprète et performer freelance travaillant en Europe. Son parcours atypique commence par l’architecture qu’il étudie à l’école Paris-Malaquais entre 2013 et 2018. Période durant laquelle il se familiarise avec la performance artistique et ses possibles en termes d’interactions de l’objet scénographique et du corps.",
                    "Plus tard, en parallèle d’une formation au Conservatoire de Créteil en danse Jazz, il poursuit une démarche de recherche par le biais du département Danse de l’Université de Paris 8 où il valide une licence en Arts du Spectacle option Danse en 2019. Élargissant ainsi ses connaissances chorégraphiques, il s’épanouit dans le travail d’analyse intersectionnelle, liant lecture du geste, histoire, anthropologie et philosophie.",
                    "Après deux années de formations de danseur-interprète plus approfondies au sein du CFA Danse Chant Comédie de Paris, suivies d’une année de professionnalisation dans le programme de la compagnie Berlinoise DART, il travail aujourd’hui en tant que danseur contemporain pour divers projets entre l’Allemagne et la France.",
                    "Il démontre son goût prononcé pour les techniques d’improvisation et de composition instantanée en mêlant la diversité des potentiels de l’écriture contemporaine, aux fondements de la culture Jazz, et la richesse des sonorités de musiques de tous styles et époques, qu’il aime entretenir et renouveler dans ses possibilités infinies, sa créativité et son mouvement.",
                    "En parallèle de ses expériences en tant qu’artiste chorégraphique avec Fabio Liberti, Human Fields, Eva Papadopoulos et Armelle Cornillon, il s’intéresse aussi aux aspects pédagogiques et à l’accompagnement du danseur professionnel en préparant ses diplômes d’État de professeur de danse en Jazz et Contemporain, ainsi qu’en se formant à la pratique du Shiatsu thérapeutique.",
                    "Il rejoint en 2023 en tant qu'interprète la compagnie EZO pour la création Les méduses ne nagent jamais seules."],
      imagePath: "adries.JPG"
    }
  ]
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openModalArtist(artist: Artist) : void{
    this.dialog.open(ArtistModalComponent, {
      data: artist
    });
  }

  getArtistImagePath(artist: Artist){
    return this.imagePathBase + artist.imagePath;
  }
}

export interface Artist{
  firstName: string,
  lastName: string,
  description: string[],
  imagePath: string,
}

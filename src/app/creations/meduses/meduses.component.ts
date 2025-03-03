import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ArtistModalComponent } from './artist-modal/artist-modal.component';

@Component({
  selector: 'app-meduses',
  templateUrl: './meduses.component.html',
  styleUrls: ['./meduses.component.scss']
})
export class MedusesComponent implements OnInit {

  private imagePathBase: string = "assets/creations/meduses/artists/"; 
  public artists: Artist[] = [
    new Artist(
      "Yumio",
      "Chanoki",
      [
        $localize`Née à Kyoto en 2002, Yumio Chanoki grandit en région parisienne où elle y découvre son intérêt pour la danse au sein du CRR de Boulogne-Billancourt puis de Paris. De formation interdisciplinaire, elle passe par la danse classique, jazz et contemporaine tout en touchant aux claquettes, au hip hop et à des danses traditionnelles.`,
        $localize`Elle obtient en 2020 son DEC jazz ainsi que son Baccalauréat Technique de la Musique et de la Danse, puis rejoint le Ballet Junior de Genève. A travers différentes rencontres chorégraphiques elle enrichit ses expériences artistiques et performe les pièces de Noa Zuk, Roy Assaf, Hofesh Shechter, Marcos Morau, Maud Lepladec, Rachid Ouramdane, Barack Marshall ou encore Olivier Dubois.`,
        $localize`Portant un intérêt au monde social et ses diverses facettes, elle obtient sa Licence d’Anthropologie et de Sociologie à l’université de Toulouse Jean Jaurès et s'y appuie pour développer une réflexion qu'elle lie à son activité artistique.`,
        $localize`Inspirée par le croisement des disciplines, notamment entre mouvement et avancées technologiques, elle est invitée à explorer cette thématique en résidence à Dock 11 Berlin. Aujourd’hui en freelance, elle travaille auprès de la Cie 7273, la Cie Joshua Monten, la Cie Kunstorain et plus récemment avec Damien Jalet sur le film Émilia Perez réalisé par Jacques Audiard.`,
        $localize`Elle rejoint en 2023 en tant qu'interprète la compagnie EZO pour la création Les méduses ne nagent jamais seules.`
      ],
      "yumio.JPG"
    ),
    new Artist(
      "Guillaume",
      "Lemoine",
      [
        $localize`Danseur-interprète et performer freelance travaillant en Europe. Son parcours atypique commence par l’architecture qu’il étudie à l’école Paris-Malaquais entre 2013 et 2018. Période durant laquelle il se familiarise avec la performance artistique et ses possibles en termes d’interactions de l’objet scénographique et du corps.`,
        $localize`Plus tard, en parallèle d’une formation au Conservatoire de Créteil en danse Jazz, il poursuit une démarche de recherche par le biais du département Danse de l’Université de Paris 8 où il valide une licence en Arts du Spectacle option Danse en 2019. Élargissant ainsi ses connaissances chorégraphiques, il s’épanouit dans le travail d’analyse intersectionnelle, liant lecture du geste, histoire, anthropologie et philosophie.`,
        $localize`Après deux années de formations de danseur-interprète plus approfondies au sein du CFA Danse Chant Comédie de Paris, suivies d’une année de professionnalisation dans le programme de la compagnie Berlinoise DART, il travail aujourd’hui en tant que danseur contemporain pour divers projets entre l’Allemagne et la France.`,
        $localize`Il démontre son goût prononcé pour les techniques d’improvisation et de composition instantanée en mêlant la diversité des potentiels de l’écriture contemporaine, aux fondements de la culture Jazz, et la richesse des sonorités de musiques de tous styles et époques, qu’il aime entretenir et renouveler dans ses possibilités infinies, sa créativité et son mouvement.`,
        $localize`En parallèle de ses expériences en tant qu’artiste chorégraphique avec Fabio Liberti, Human Fields, Eva Papadopoulos et Armelle Cornillon, il s’intéresse aussi aux aspects pédagogiques et à l’accompagnement du danseur professionnel en préparant ses diplômes d’État de professeur de danse en Jazz et Contemporain, ainsi qu’en se formant à la pratique du Shiatsu thérapeutique.`,
        $localize`Il rejoint en 2023 en tant qu'interprète la compagnie EZO pour la création Les méduses ne nagent jamais seules.`
      ],
      "guillaume.JPG"
    ),
    new Artist(
      "Julie",
      "Ehrenfeld",
      [
        $localize`Julie Ehrenfeld est danseuse, chorégraphe et thérapeute. Originaire de Nancy, elle étudie la danse classique et contemporaine au Conservatoire Régional du Grand Nancy. Elle obtient son Certificat d’Etudes Chorégraphiques en danse classique en 2017 ainsi que son Diplôme d’Etudes Chorégraphiques en danse contemporaine l’année suivante.`,
        $localize`Passionnée également par les sciences humaines, elle se lance dans un double parcours danse et psychologie qui lui permettront par la suite de faire de l’art thérapie. Elle obtient en 2023 une licence de psychologie, ayant déjà reçu en 2020 le titre de Maître-Praticienne en Programmation Neuro Linguistique (méthode de médiation thérapeutique).`,
        $localize`Elle possède avant tout le désir de se consacrer au métier de danseuse interprète, elle arrive en 2020 à Paris où elle entre chez ACTS : école supérieure de danse contemporaine. Son parcours dans la capitale lui permet d’approfondir sa technique et de rencontrer dans le cadre de résidences de nombreux chorégraphes connus comme Youval Pick, Alban Richard, Dominique Mercy, Antonin Rioche, Emanuel Gat et beaucoup d’autres.`,
        $localize`Ces diverses influences lui permettent d’explorer différents univers, d’enrichir son vocabulaire et de se créer petit à petit un univers personnel car la création chorégraphique et vidéographique la passionne tout autant.`,
        $localize`C'est pour cela, qu'elle a décidé en 2023 de monter sa propre compagnie Faune pour laquelle elle crée des pièces engagées et pluridisciplinaires. Elle poursuit donc actuellement son parcours de chorégraphe mais également de danseuse en Freelance en intégrant des pièces de diverses compagnies.`,
        $localize`Elle rejoint en 2024 en tant qu'interprète la compagnie EZO pour la création Les méduses ne nagent jamais seules.`
      ],
      "julie.jpg"
    ),
    new Artist(
      "Mathilde",
      "Tordjeman",
      [
        $localize`Née à Nice, dans le sud de la France, Mathilde se passionne très vite pour la danse et le mouvement. Initialement attirée par le modern jazz et le hip-hop, son parcours artistique la conduit à la danse contemporaine. Après des études en ingénierie à l'Ecole Centrale de Lyon, elle décide de suivre une formation professionnelle afin d’apprendre le métier de danseuse interprète.`,
        $localize`Animée par une quête de nouveaux horizons, Mathilde élargit constamment sa pratique artistique en explorant différentes techniques de mouvement telles que la technique Gaga, le yoga et le hip-hop freestyle, lui permettant d’enrichir son vocabulaire corporel.`,
        $localize`Également chanteuse et DJ, Mathilde est une artiste pluridisciplinaire qui explore différents médiums de création.`,
        $localize`Elle rejoint en 2023 en tant qu'interprète la compagnie EZO pour la création Les méduses ne nagent jamais seules.`
      ],
      "mathilde.JPG"
    ),
    new Artist(
      "Adriès",
      "Sofi",
      [
        $localize`Adriès Sofi est un artiste danseur de 25 ans, basé à Lyon. Il s’est entraîné jeune en breakdance et danses Hip-Hop avec la Cie Kafig. Avant de se former et de travailler dans les danses contemporaines, la performance, et la danse classique.`,
        $localize`Il intègre en 2018 l’école SEAD Salzburg Experimental Academy of Dance en Autriche pour 4 ans, où il travaille dans des créations d’Elina Pirinen (FI), Milla Koistinen (SU), Edivaldo Ernesto (MZ), Paul Blackman & Christine Gouzelis (GR), et danse aussi du répertoire de grande compagnie (Sidi Larbi Cherkaoui, Akram Khan).`,
        $localize`Jeune chorégraphe inspiré par les corps queer et par l’expression politique et poétique dans les milieux festifs et la club culture, il monte en 2022-2023 un projet de performance, TAZ, au sein des clubs de musique électronique. Il y explore une physicalité extatique, au service d’une danse sensible et furieuse.`,
        $localize`Adriès travaille également auprès de la jeunesse. Directeur en centre de vacances jeunes avec la CCAS, il met en pratique et transmet un projet politique et social autour de l’organisation et de l’intelligence collective.`,
        $localize`Il rejoint en 2023 en tant qu'interprète la compagnie EZO pour la création Les méduses ne nagent jamais seules.`
      ],
      "adries.JPG"
    )
  ]
  constructor(public dialog: MatDialog, public router: Router) { }

  ngOnInit(): void {
  }

  openModalArtist(artist: Artist) : void{
    this.dialog.open(ArtistModalComponent, {
      data: artist,
      panelClass: 'artist-modal-panel'
    });
  }

  getArtistImagePath(artist: Artist){
    return this.imagePathBase + artist.imagePath;
  }
}

export class Artist {
  public firstName!: string;
  public lastName!: string;
  public description!: string[];
  public imagePath!: string;

  get alt(): string {
    return $localize`Portrait de ` + this.firstName + " " + this.lastName
  }

  constructor(firstName: string, lastName: string, description: string[], imagePath: string){
    this.firstName = firstName;
    this.lastName = lastName;
    this.description = description;
    this.imagePath = imagePath;
  }
}

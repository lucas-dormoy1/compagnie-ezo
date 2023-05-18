import { Component, OnInit } from '@angular/core';
import { Project } from '../models/Project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  public projects: Project[] = [
    { 
      src: 'assets/projects/pluie-montchal/montchal_1.jpg', 
      title: "Dialogue avec l'oeuvre Pluie de Montchal", 
      description: "Performance filmée", 
      route: "/dialogue-avec-l-œuvre-pluie-de-montchal"  
    },
    { 
      src: 'assets/projects/whoami/whoami_1.jpg', 
      title: "WHOAMI", 
      description: "Pièce pour 6 danseuses chorégraphiée par Giada Grieco", 
      route: "/whoami"  
    },
    { 
      src: 'assets/projects/aisling/aisling_1.jpg', 
      title: "AISLING", 
      description: "Pièce chorégraphiée par Dor Mamalia et Dariusz Nowak pour DART DSP", 
      route: "/aisling"  
    },
    { 
      src: 'assets/projects/solos-for-real/solos_for_real_1.jpg', 
      title: "Solo(s) for real", 
      description: "Pièce chorégraphiée par Fabio Liberti pour DART DSP", 
      route: "/solos-for-real"  
    },
    { 
      src: 'assets/projects/flux/flux_1.jpg', 
      title: "Ces flux qui nous portent et nous emportent", 
      description: "Pièce chorégraphiée par Amandine Faurite pour le CFDd", 
      route: "/ces-flux-qui-nous-portent-et-nous-emportent"  
    },
    { 
      src: 'assets/projects/karavel/karavel_1.jpg', 
      title: "Festival Karavel", 
      description: "Pièces d'ouverture sous la direction artisique de Mourad Merzouki", 
      route: "/festival-karavel"  
    },
    { 
      src: 'assets/projects/one-breath/one_breath_1.jpg', 
      title: "One breath", 
      description: "Clip - Court métrage réalisé par Mathilda Cabezas", 
      route: "/one-breath"  
    },
  ];

  public currentSelection: number = 0;

  getCurrentProject(): Project {
    return this.projects[this.currentSelection]
  }

  getNextProject(): Project {
    return this.projects[this.currentSelection +1]
  }

  getPreviousProject(): Project {
    return this.projects[this.currentSelection -1]
  }

  

  next(): void {
    if (this.currentSelection !== this.projects.length -1){
      this.currentSelection++;
    }
  }

  previous(): void {
    if (this.currentSelection !== 0){
      this.currentSelection--;
    }
  }

  ngOnInit(): void {
  }

}

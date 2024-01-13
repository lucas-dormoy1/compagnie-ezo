import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-horizons-cailloux',
  templateUrl: './horizons-cailloux.component.html',
  styleUrls: ['./horizons-cailloux.component.scss']
})
export class HorizonsCaillouxComponent {

  constructor(public router: Router) { }

  public openArtisiticFile(): void{
    const url = this.router.serializeUrl(this.router.createUrlTree(['/fr/assets/creations/solo/Dossier_artistique_solo_Cie_EZO.pdf']));
    window.open(url, '_blank');
  }

  public openWorkshopFile(): void{
    const url = this.router.serializeUrl(this.router.createUrlTree(['/fr/assets/creations/solo/Proposition_Atelier_Solo_2024_Cie_EZO.pdf']));
    console.log(url);
    window.open(url, '_blank');
  }
}

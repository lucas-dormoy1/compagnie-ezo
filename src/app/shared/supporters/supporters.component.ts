import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

export interface Supporter {
  src: string;
  alt: string;
  width: number;
  height: number;
  label?: string;
}

export type SupporterKey = keyof typeof SUPPORTERS;

export const SUPPORTERS = {
  polePik: { src: 'assets/soutiens/pole-en-scenes-logo.png', alt: 'logo de Pôle Pik', width: 200, height: 80 },
  cnd: { src: 'assets/soutiens/cnd_blanc.png', alt: 'logo du CND', width: 200, height: 80 },
  manufacture: { src: 'assets/soutiens/logo-blanc-manufacture.png', alt: "logo de la Manufacture d'Aurillac", width: 200, height: 80 },
  villeMurol: { src: 'assets/soutiens/blason_murol.png', alt: 'blason de la ville de Murol', width: 100, height: 120, label: 'Ville de Murol' },
  halletEghayan: { src: 'assets/soutiens/hallet_eghayan.png', alt: 'logo de la compagnie Hallet Eghayan', width: 200, height: 80 },
  chatha: { src: 'assets/soutiens/chatha.svg', alt: 'logo du studio Chatha', width: 200, height: 80 },
  spedidam: { src: 'assets/soutiens/spedidam.png', alt: 'logo de la Spedidam', width: 200, height: 80 },
  regardDuCygne: { src: 'assets/soutiens/regard-du-cygne.png', alt: 'logo du Regard Du Cygne', width: 200, height: 80 },
  conseilCantal: { src: 'assets/soutiens/conseil-cantal.png', alt: 'logo du conseil départemental du Cantal', width: 200, height: 80 },
  dart: { src: 'assets/soutiens/dart.png', alt: 'logo de DART Dance Company', width: 200, height: 80 },
  passeursDanse: { src: 'assets/soutiens/passeurs.png', alt: 'logo de Passeurs de danse', width: 200, height: 80 },
  platform14: { src: 'assets/soutiens/platform-14.png', alt: 'Logo du festival Platform14', width: 200, height: 80 },
  institutFrancaisTurquie: { src: 'assets/soutiens/institut-francais-turquie-web.jpg', alt: "logo de l'institu français de Turquie", width: 200, height: 80 },
  boomStructur: { src: 'assets/soutiens/boom-structur.svg', alt: "logo de Boom'Structur", width: 200, height: 80 },
  memMurol: { src: 'assets/projects/musee/Logo-MEM.png', alt: 'Logo du MEM Murol', width: 200, height: 80 },
  ileO: { src: 'assets/projects/jeune-public/Logo-ILE-O.png', alt: "Logo L'île Ô", width: 200, height: 80 },
} as const satisfies Record<string, Supporter>;

@Component({
    selector: 'app-supporters',
    templateUrl: './supporters.component.html',
    styleUrls: ['./supporters.component.scss'],
    standalone: true,
    imports: [NgOptimizedImage],
})
export class SupportersComponent {
  @Input() set keys(value: SupporterKey[]) {
    this.supporters = value.map(key => SUPPORTERS[key]);
  }
  supporters: Supporter[] = [];
}

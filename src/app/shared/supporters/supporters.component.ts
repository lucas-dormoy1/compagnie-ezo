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
  polePik: { src: 'assets/soutiens/pole-en-scenes-logo.png', alt: $localize`logo de Pôle Pik`, width: 200, height: 80 },
  cnd: { src: 'assets/soutiens/cnd_blanc.png', alt: $localize`logo du CND`, width: 200, height: 80 },
  manufacture: { src: 'assets/soutiens/logo-blanc-manufacture.png', alt: $localize`logo de la Manufacture d'Aurillac`, width: 200, height: 80 },
  villeMurol: { src: 'assets/soutiens/blason_murol.png', alt: $localize`blason de la ville de Murol`, width: 100, height: 120, label: $localize`Ville de Murol` },
  halletEghayan: { src: 'assets/soutiens/hallet_eghayan.png', alt: $localize`logo de la compagnie Hallet Eghayan`, width: 200, height: 80 },
  chatha: { src: 'assets/soutiens/chatha.svg', alt: $localize`logo du studio Chatha`, width: 200, height: 80 },
  spedidam: { src: 'assets/soutiens/spedidam.png', alt: $localize`logo de la Spedidam`, width: 200, height: 80 },
  regardDuCygne: { src: 'assets/soutiens/regard-du-cygne.png', alt: $localize`logo du Regard Du Cygne`, width: 200, height: 80 },
  conseilCantal: { src: 'assets/soutiens/conseil-cantal.png', alt: $localize`logo du conseil départemental du Cantal`, width: 200, height: 80 },
  dart: { src: 'assets/soutiens/dart.png', alt: $localize`logo de DART Dance Company`, width: 200, height: 80 },
  passeursDanse: { src: 'assets/soutiens/passeurs.png', alt: $localize`logo de Passeurs de danse`, width: 200, height: 80 },
  platform14: { src: 'assets/soutiens/platform-14.png', alt: $localize`Logo du festival Platform14`, width: 200, height: 80 },
  institutFrancaisTurquie: { src: 'assets/soutiens/institut-francais-turquie-web.jpg', alt: $localize`logo de l'institut français de Turquie`, width: 200, height: 80 },
  boomStructur: { src: 'assets/soutiens/boom-structur.svg', alt: $localize`logo de Boom'Structur`, width: 200, height: 80 },
  memMurol: { src: 'assets/projects/musee/Logo-MEM.png', alt: $localize`Logo du MEM Murol`, width: 200, height: 80 },
  ileO: { src: 'assets/projects/jeune-public/Logo-ILE-O.png', alt: $localize`Logo L'île Ô`, width: 200, height: 80 },
  seed: { src: 'assets/soutiens/SEED_logo-small-2.png', alt: $localize`logo du programme SEED`, width: 200, height: 80 },
  liminal: { src: 'assets/soutiens/logo-liminal.png', alt: $localize`logo de liminal`, width: 200, height: 80 },
  leveilleur: { src: 'assets/soutiens/logo-leveilleur-scop.png', alt: $localize`logo de l'Éveilleur`, width: 200, height: 80 },
  deltaPi: { src: 'assets/soutiens/delta_pi.png', alt: $localize`logo de Delta Pi`, width: 200, height: 80 },
  duncanCenter: { src: 'assets/soutiens/logo_duncan_center.png', alt: $localize`logo du Duncan Dance Research Center`, width: 200, height: 80 },
} satisfies Record<string, Supporter>;

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

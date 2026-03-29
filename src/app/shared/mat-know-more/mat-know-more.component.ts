import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-mat-know-more',
    templateUrl: './mat-know-more.component.html',
    styleUrls: ['./mat-know-more.component.scss'],
    standalone: true,
    imports: [NgIf, RouterLink, MatButtonModule],
})
export class MatKnowMoreComponent {

  @Input()
  public link: string = ""

  @Input()
  public externalLink: string | null = null

  @Input()
  public text: string | null = $localize`En savoir plus`
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mat-know-more',
  templateUrl: './mat-know-more.component.html',
  styleUrls: ['./mat-know-more.component.scss']
})
export class MatKnowMoreComponent {

  @Input()
  public link: string = ""

  @Input()
  public externalLink: string | null = null

  @Input()
  public text: string | null = $localize`En savoir plus`
}

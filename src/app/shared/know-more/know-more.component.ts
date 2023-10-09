import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-know-more',
  templateUrl: './know-more.component.html',
  styleUrls: ['./know-more.component.scss']
})
export class KnowMoreComponent {

  @Input()
  public link: string = ""

}

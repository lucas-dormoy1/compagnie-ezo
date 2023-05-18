import { Component, EventEmitter, Output } from '@angular/core';
import { DropDownAnimation } from './animations';

@Component({
  selector: 'app-creations-menu',
  templateUrl: './creations-menu.component.html',
  styleUrls: ['./creations-menu.component.scss'],
  animations: [DropDownAnimation]
})
export class CreationsMenuComponent {
  isOpen: boolean;

  @Output()
  menuClosed: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(){
    this.isOpen = false;
  }

  closeMenu(){
    this.isOpen = false;
    this.menuClosed.emit(true);
  }

}

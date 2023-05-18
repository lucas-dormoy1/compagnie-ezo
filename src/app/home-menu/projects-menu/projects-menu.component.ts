import { Component, EventEmitter, Output } from '@angular/core';
import { DropDownAnimation } from './animations';

@Component({
  selector: 'app-projects-menu',
  templateUrl: './projects-menu.component.html',
  styleUrls: ['./projects-menu.component.scss'],
  animations: [DropDownAnimation]
})
export class ProjectsMenuComponent{
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

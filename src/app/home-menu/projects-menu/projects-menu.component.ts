import { Component, EventEmitter, Output } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DropDownAnimation } from './animations';

@Component({
    selector: 'app-projects-menu',
    templateUrl: './projects-menu.component.html',
    styleUrls: ['./projects-menu.component.scss'],
    animations: [DropDownAnimation],
    standalone: true,
    imports: [NgClass, NgIf, RouterLink],
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

import { Component, HostListener } from '@angular/core';
import { DropDownAnimation } from "./animations";

@Component({
  selector: 'app-home-menu',
  templateUrl: './home-menu.component.html',
  styleUrls: ['./home-menu.component.scss'],
  animations: [DropDownAnimation]
})
export class HomeMenuComponent {
  isOpen: boolean;

  constructor(){
    this.isOpen = false;
  }

  closeMenu(){
    this.isOpen = false;
  }

  private wasInside = false;

  @HostListener('click')
  clickInside() {
    this.wasInside = true;
  }

  @HostListener('document:click')
  clickout() {
    if (!this.wasInside) {
      this.closeMenu()
    }
    this.wasInside = false;
  }
}


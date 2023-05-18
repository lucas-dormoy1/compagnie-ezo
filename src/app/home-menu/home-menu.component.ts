import { Component } from '@angular/core';
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
}


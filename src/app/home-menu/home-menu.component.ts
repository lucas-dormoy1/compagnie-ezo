import { Component, HostListener } from '@angular/core';
import { NgIf, NgSwitch, NgSwitchCase } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DropDownAnimation, SlideAnimation } from "./animations";

@Component({
    selector: 'app-home-menu',
    templateUrl: './home-menu.component.html',
    styleUrls: ['./home-menu.component.scss'],
    animations: [DropDownAnimation, SlideAnimation],
    standalone: true,
    imports: [NgIf, NgSwitch, NgSwitchCase, RouterLink],
})
export class HomeMenuComponent {
  isOpen = false;
  currentView: 'main' | 'creations' | 'projects' = 'main';

  toggleMenu() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.currentView = 'main';
    }
  }

  closeMenu() {
    this.isOpen = false;
  }

  goBack() {
    this.currentView = 'main';
  }

  private wasInside = false;

  @HostListener('click')
  clickInside() {
    this.wasInside = true;
  }

  @HostListener('document:click')
  clickout() {
    if (!this.wasInside) {
      this.isOpen = false;
    }
    this.wasInside = false;
  }

  public switchLanguageFR(): void {
    this.SwitchLanguage("fr");
  }
  public switchLanguageEN(): void {
    this.SwitchLanguage("en");
  }

  private SwitchLanguage(targetLocale: string): void {
    const localeRegex = new RegExp("\/(fr|en)\/")
    const currentUrl = window.location.href;
    const currentLocale = localeRegex.exec(currentUrl);
    if (currentLocale != null && currentLocale[1] != targetLocale) {
      const redirection = currentUrl.replace("/" + currentLocale[1] + "/", "/" + targetLocale + "/");
      window.location.href = redirection;
    }
  }
}

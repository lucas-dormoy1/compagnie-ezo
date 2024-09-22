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

  public switchLanguageFR() : void{
    this.SwitchLanguage("fr");
  }
  public switchLanguageEN() : void{
    this.SwitchLanguage("en");
  }

  private SwitchLanguage(targetLocale: string) : void{
    const localeRegex = new RegExp("\/(fr|en)\/")
    const currentUrl = window.location.href;
    console.log("current url: " + currentUrl);
    const currentLocale =  localeRegex.exec(currentUrl);
    if(currentLocale == null){
      console.log("no locale found in url");
    }
    else {
      if(currentLocale[1] == targetLocale){
        console.log("already in locale " + targetLocale);
      }
      else{
        const redirection = currentUrl.replace("/"+currentLocale[1]+"/", "/"+targetLocale+"/");
        console.log("redirecting to: " + redirection);
        window.location.href = redirection;
      }
    }
  }
}


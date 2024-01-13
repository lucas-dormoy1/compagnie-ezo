import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { DropDownAnimation } from "./animations";

@Component({
  selector: 'app-home-menu',
  templateUrl: './home-menu.component.html',
  styleUrls: ['./home-menu.component.scss'],
  animations: [DropDownAnimation]
})
export class HomeMenuComponent {
  isOpen: boolean;

  constructor(private router: Router){
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
    const localeRegex = new RegExp("^\/(fr|en)\/*")
    const currentUrl = this.router.url;
    const currentLocale =  localeRegex.exec(currentUrl);
    if(currentLocale == null){
      if(targetLocale == "fr"){
        console.log("already in default locale fr")
      }
      else{
        const redirection = "/" + targetLocale + currentUrl;
        console.log("redirecting to: " + redirection);
        this.router.navigate([redirection]);
      }
    }
    else {
      if(currentLocale[1] == targetLocale){
        console.log("already in locale " + targetLocale);
      }
      else{
        let prefix =  "/" + targetLocale;
        if(targetLocale == "fr"){
          prefix = "";
        }
        const redirection = prefix + currentUrl.substring(3);
        console.log("redirecting to: " + redirection);
        this.router.navigate([redirection]);
      }
    }
  }
}


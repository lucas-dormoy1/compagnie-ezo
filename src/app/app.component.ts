import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [RouterOutlet, HeaderComponent],
})
export class AppComponent {
  title = 'Estelle Bézombes';
  public menuVisible = false;
  public projectsVisible = false;

  public toggleMenu() : void{
    this.menuVisible = !this.menuVisible;
  }
  
  public toggleProjects() : void{
    this.projectsVisible = !this.projectsVisible;
  }

  onActivate(event: any) {
    window.scroll({ 
            top: 0, 
            left: 0, 
            behavior: 'smooth' 
     });
 }
}

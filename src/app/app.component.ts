import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
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

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
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
}

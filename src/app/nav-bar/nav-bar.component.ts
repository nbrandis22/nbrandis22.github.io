import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  engineeringPages = [
    { name: 'Digital Audio Visualizer', link: '/dav'}, 
    { name: 'Allegro', link: '/allegro'}, 
    { name: 'FRED', link: '/fred' },
  ]
}

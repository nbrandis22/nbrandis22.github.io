import { Component } from '@angular/core';

import { EngineeringPages } from '../pages/engineering/engineering.config';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  engineeringPages = EngineeringPages;
}

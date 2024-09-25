import { Component } from '@angular/core';

import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faYoutube, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  constructor(library: FaIconLibrary) {
    library.addIcons(faYoutube, faLinkedin, faGithub);
  }

}

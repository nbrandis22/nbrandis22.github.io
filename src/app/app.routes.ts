import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { EngineeringComponent } from './pages/engineering/engineering.component';
import { MusicComponent } from './pages/music/music.component';
import { QuillComponent } from './pages/engineering/quill/quill.component';
import { FredComponent } from './pages/engineering/fred/fred.component';
import { DavComponent } from './pages/engineering/dav/dav.component';
import { AllegroComponent } from './pages/engineering/allegro/allegro.component';
import { AdventuresComponent } from './pages/adventures/adventures.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    title: 'Home',
  },
  {
    path: 'engineering',
    component: EngineeringComponent,
    title: 'Engineering',
  },
  {
    path: 'engineering/quill',
    component: QuillComponent,
  },
  {
    path: 'engineering/fred',
    component: FredComponent,
  },
  {
    path: 'engineering/dav',
    component: DavComponent,
  },
  {
    path: 'engineering/allegro',
    component: AllegroComponent,
  },
  {
    path: 'music',
    component: MusicComponent,
    title: 'Music',
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'About',
  },
  {
    path: 'adventures',
    component: AdventuresComponent,
    title: 'Adventures',
  },
];

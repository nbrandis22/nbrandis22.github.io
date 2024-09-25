import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { EngineeringComponent } from './pages/engineering/engineering.component';
import { MusicComponent } from './pages/music/music.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home',
    },
    {
        path: 'engineering',
        component: EngineeringComponent,
        title: 'Engineering',
    },
    {
        path: 'music',
        component: MusicComponent,
        title: 'Music',
    },
];

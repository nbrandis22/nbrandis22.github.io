import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { EngineeringComponent } from './engineering/engineering.component';
import { MusicComponent } from './music/music.component';

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

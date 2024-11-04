import { NgModule } from '@angular/core';
import { provideRouter, RouterLink } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgFor }  from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PagesModule } from './pages/pages.module';

@NgModule({
    declarations: [AppComponent, NavBarComponent, FooterComponent],
    bootstrap: [AppComponent],
    imports: [BrowserModule, RouterOutlet, RouterLink, FontAwesomeModule, PagesModule, NgFor, HttpClientModule ],
    providers: [provideRouter(routes)],
})
export class AppModule {

}
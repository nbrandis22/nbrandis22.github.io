import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { EngineeringComponent } from "./engineering/engineering.component";
import { MusicComponent } from "./music/music.component";
import { AboutComponent } from "./about/about.component";
import { NgFor, NgIf } from "@angular/common";
import { AdventuresComponent } from "./adventures/adventures.component";

@NgModule({
    declarations: [HomeComponent, EngineeringComponent, MusicComponent, AboutComponent, AdventuresComponent],
    imports: [NgIf, NgFor],
})
export class PagesModule {}
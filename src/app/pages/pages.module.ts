import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { EngineeringComponent } from "./engineering/engineering.component";
import { MusicComponent } from "./music/music.component";

@NgModule({
    declarations: [HomeComponent, EngineeringComponent, MusicComponent],
    imports: [],
})
export class PagesModule {}
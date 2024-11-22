import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgIf, NgFor } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-allegro',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './allegro.component.html',
  styleUrl: './allegro.component.css'
})
export class AllegroComponent implements OnInit {
  htmlSections?: any[];

  constructor(private httpClient: HttpClient, private sanitizer: DomSanitizer) {}

  private allegroUrl = environment.apiUrl + 'allegro';

  ngOnInit(): void {
    this.httpClient.get(this.allegroUrl).subscribe(
      (response: any) => {
        this.htmlSections = response.sections;
      },
      (error) => {
        console.error('Error fetching allegro page content:', error);
      }
    );
  }

  getVideoUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

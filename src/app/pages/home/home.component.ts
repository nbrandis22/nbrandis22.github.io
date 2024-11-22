import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  htmlSections?: any[];

  constructor(
    private httpClient: HttpClient,
    private sanitizer: DomSanitizer
  ) {}

  private homeUrl = environment.apiUrl + 'home';

  ngOnInit(): void {
    this.httpClient.get(this.homeUrl).subscribe(
      (response: any) => {
        this.htmlSections = response.sections;
      },
      (error) => {
        console.error('Error fetching home page content:', error);
      }
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-adventures',
  templateUrl: './adventures.component.html',
  styleUrl: './adventures.component.css',
})
export class AdventuresComponent implements OnInit {
  htmlSections?: any[];

  constructor(
    private httpClient: HttpClient,
    private sanitizer: DomSanitizer
  ) {}

  private adventuresUrl = environment.apiUrl + 'adventures';

  ngOnInit(): void {
    this.httpClient.get(this.adventuresUrl).subscribe(
      (response: any) => {
        this.htmlSections = response.sections;
      },
      (error) => {
        console.error('Error fetching adventures page content:', error);
      }
    );
  }
}

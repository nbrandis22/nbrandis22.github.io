import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-engineering',
  templateUrl: './engineering.component.html',
  styleUrl: './engineering.component.css',
})
export class EngineeringComponent implements OnInit {
  htmlSections?: any[];

  constructor(
    private httpClient: HttpClient,
    private sanitizer: DomSanitizer
  ) {}

  private engineeringUrl = environment.apiUrl + 'engineering';

  ngOnInit(): void {
    this.httpClient.get(this.engineeringUrl).subscribe(
      (response: any) => {
        this.htmlSections = response.sections;
      },
      (error) => {
        console.error('Error fetching engineering page content:', error);
      }
    );
  }
}

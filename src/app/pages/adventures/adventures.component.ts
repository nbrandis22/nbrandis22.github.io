import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

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

  ngOnInit(): void {
    this.httpClient.get('http://localhost:3000/adventures').subscribe(
      (response: any) => {
        this.htmlSections = response.sections;
      },
      (error) => {
        console.error('Error fetching adventures page content:', error);
      }
    );
  }
}

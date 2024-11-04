import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

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

  ngOnInit(): void {
    this.httpClient.get('http://localhost:3000/engineering').subscribe(
      (response: any) => {
        this.htmlSections = response.sections;
      },
      (error) => {
        console.error('Error fetching engineering page content:', error);
      }
    );
  }
}

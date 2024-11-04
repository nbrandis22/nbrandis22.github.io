import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

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

  ngOnInit(): void {
    this.httpClient.get('http://localhost:3000/home').subscribe(
      (response: any) => {
        this.htmlSections = response.sections;
      },
      (error) => {
        console.error('Error fetching home page content:', error);
      }
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-quill',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './quill.component.html',
  styleUrl: './quill.component.css',
})
export class QuillComponent implements OnInit {
  htmlSections?: any[];

  constructor(
    private httpClient: HttpClient,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.httpClient.get('http://localhost:3000/quill').subscribe(
      (response: any) => {
        this.htmlSections = response.sections;
      },
      (error) => {
        console.error('Error fetching quill page content:', error);
      }
    );
  }
}

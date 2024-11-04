import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgIf, NgFor } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-dav',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './dav.component.html',
  styleUrl: './dav.component.css'
})
export class DavComponent implements OnInit {
  htmlSections?: any[];

  constructor(private httpClient: HttpClient, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.httpClient.get('http://localhost:3000/dav').subscribe(
      (response: any) => {
        this.htmlSections = response.sections;
      },
      (error) => {
        console.error('Error fetching dav page content:', error);
      }
    );
  }

  getVideoUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

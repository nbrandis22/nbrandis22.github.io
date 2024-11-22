import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgIf, NgFor } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-fred',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './fred.component.html',
  styleUrl: './fred.component.css'
})
export class FredComponent implements OnInit {
  htmlSections?: any[];

  constructor(private httpClient: HttpClient, private sanitizer: DomSanitizer) {}
  
  private fredUrl = environment.apiUrl + 'fred';

  ngOnInit(): void {
    this.httpClient.get(this.fredUrl).subscribe(
      (response: any) => {
        this.htmlSections = response.sections;
      },
      (error) => {
        console.error('Error fetching fred page content:', error);
      }
    );
  }

  getVideoUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

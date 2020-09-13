import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { GithubService } from './github.service'


@Component({
  selector: 'app-root',
  template: '<app-github></app-github>',
  styleUrls: ['./app.component.css'],
  providers: [GithubService, HttpClient]
})
export class AppComponent {
  title = 'Price Tracker';
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private userName = 'Mirafalxx';
  constructor(private http: HttpClient) {

  }
  getUser() {
    return this.http.get('https://api.github.com/users/' + this.userName).pipe(map(res => res));
  }
}

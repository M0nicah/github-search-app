import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Repos } from '../repos';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  url : string = "https://api.github.com/users/"
  URL: string = "https://api.github.com/users/repos"

  constructor(private http : HttpClient) { }

  getUser(username: string){
    
    return this.http.get(this.url + username);

  }
  getRepo(_repo: string, username: string){
    return this.http.get(this.URL + username + Repos)
  }
}

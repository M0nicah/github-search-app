import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  url : string = "https://api.github.com/users/Kayere"

  constructor(private http : HttpClient) { }
}

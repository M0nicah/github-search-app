import { Repos } from './../repos';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class GithubReposService {
  url = "https://api.github.com/users/";
  repos!: Repos
  reposArr: any[] = []

  constructor(private http: HttpClient) {}

  getRepos(search: string) {
    let promise = new Promise((resolve, reject) => {
      this.http
        .get<any>(
          `${this.url}${search}/repos?access_token'=${environment.GITHUB_API_KEY}`
        )
        .toPromise()
        .then(
          (response) => {
            response = response!;
            this.repos = new Repos(
              response.avatar_url,
              response.name,
              response.bio,
              response.followers,
              response.following,
              response.company,
              response.blog,
              response.twitter_username,
              response.email,
               
            );
            resolve(response);
          },
          (error: any) => {
            reject(error);
          }
        );
    });
    return promise;
  }
}

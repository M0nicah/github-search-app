import { Repos } from './../repos';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GithubReposService {
  url = 'https://api.github.com/users/';
  repos!: Repos;
  reposArr: any[] = [];

  constructor(private http: HttpClient) {
    this.repos = new Repos('','','','',new Date,new Date,'','','','','')
  }

  getRepo(search: string) {
    this.reposArr = [];
    let promise = new Promise((resolve, reject) => {
      this.http
        .get<any>(
          `${this.url}${search}/repos?access_token'=${environment.GITHUB_API_KEY}`
        )
        .toPromise()
        .then(
          (response) => {
            response!.forEach((response: any) => {
              this.repos = new Repos(
               this.repos.name = response.name,
               this.repos.description= response.description,
                this.repos.login = response.login,
                this.repos.visibility = response.visibility,
                this.repos.created_at= response.created_at,
                this.repos.updated_at = response.updated_at,
                this.repos.html_url = response.html_url,
                this.repos.repos_url = response.repos_url,
                this.repos.clone_url = response.clone_url,
                this.repos.homepage = response.homepage,
                this.repos.language = response.language
              );
              this.reposArr.push(this.repos);
            });
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

import { SearchPageComponent } from './../search-page/search-page.component';

import { Users } from './../users';
import { Repos } from './../repos';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable} from '@angular/core';
import { environment } from 'src/environments/environment';
import { GithubService } from '../services/github.service';


@Injectable({
  providedIn: 'root',
})
export class GithubReposService {
  url: string = 'https://api.github.com/users/';
  repos!: Repos;
  username!: string;
  reposArr: any[] = [];
  search!: string;

  constructor(private http: HttpClient, private GithubService: GithubService) {
    this.repos = new Repos('','','','',new Date,new Date,'','','','','')
  }
  getRepo(search: string) {
    console.log(search)
    let promise2 = new Promise((resolve, reject) => {
      this.http
        .get<any>(
          `${this.url}${search}/repos?access_token'=${environment.GITHUB_API_KEY}`
        )  
        .toPromise()
        .then(
          (response) => {
            response!.forEach ((res: any) => {
              this.repos = new Repos(
                (this.repos.name = res.name),
                (this.repos.description = res.description),
                (this.repos.login = res.login),
                (this.repos.visibility = res.visibility),
                (this.repos.created_at = res.created_at),
                (this.repos.updated_at = res.updated_at),
                (this.repos.html_url = res.html_url),
                (this.repos.svn_url = res.svn_url),
                (this.repos.clone_url = res.clone_url),
                (this.repos.homepage = res.homepage),
                (this.repos.language = res.language)
              );
              this.reposArr.push(this.repos);
              console.log(this.reposArr);
            });
            resolve(response);
            console.log(response);
            console.log(`${this.url}${search}/repos?access_token'=${environment.GITHUB_API_KEY}`);
          },
          (error: any) => {
            reject(error);
          }
        );
    });
    return promise2;
  }
}

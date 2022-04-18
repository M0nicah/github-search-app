import { Users } from './../users';


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})
export class GithubService {
  [x: string]: any;
  url: string = 'https://api.github.com/users/';
  username!: string;
  newUser: Users;

  constructor(private http: HttpClient) {
    this.newUser = new Users('', '', '', 0, 0, '', '', '', '', '', new Date());
  }

  getUser(username: string) {
    let promise = new Promise((resolve, reject) => {
      this.http
        .get<any>(
          `${this.url}${username}?access_token'=${environment.GITHUB_API_KEY}`
        )
        .toPromise()
        .then(
          (response) => {
            response = response!;
            this.newUser = new Users(
              (this.newUser.avatar = response.avatar_url),
              (this.newUser.name = response.name),
              (this.newUser.bio = response.bio),
              (this.newUser.followers = response.followers),
              (this.newUser.following = response.following),
              (this.newUser.company = response.company),
              (this.newUser.blog = response.blog),
              (this.newUser.twitter = response.twitter_username),
              (this.newUser.email = response.email),
              (this.newUser.profile = response.html_url),
              (this.newUser.created_at = response.created_at)
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

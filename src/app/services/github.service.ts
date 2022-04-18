
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Subscribe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  url : string = "https://api.github.com/users/";
  URL: string = "https://api.github.com/users/{username}/repos";
  Repos: any;
  username!: string;
  user!:string;
  getRepo: any;
  // userDetails: string;

  constructor(private http : HttpClient) { 
    // this.userDetails = new Repos('','','','','','','')
  }

  getUser(username: string){
    
    return this.http.get(this.url + username);

  }
  // getRepo(_Repos: string):Observable<any>{
  //   return this.http.get(this.url + {{ username }} + '/repos');
   
  // }

  // getRepos(username:string){
  //   console.log("Repo service");
    
  //       let url = `${this.Repos}${username}/repos`;
    
  //   let promise = new Promise((resolve, reject) => {
  //     fetch(url).then(res => {
  //       resolve(res.json());
  //       // return res.json();
  //     }).catch(e => {
  //       reject(e);
  //       console.log(e);
  //     });
  //   });

  //   return promise;

  // }     
}

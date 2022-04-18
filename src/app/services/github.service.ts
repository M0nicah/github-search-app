
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Repos } from '../repos';


@Injectable({
  providedIn: 'root'
})
export class GithubService {
  url : string = "https://api.github.com/users/";
  URL: string = "https://api.github.com/users/repos";
  Repos: any;
  username!: string;
  user!:string;
  // userDetails: string;

  constructor(private http : HttpClient) { 
    // this.userDetails = new Repos('','','','','','','')
  }

  getUser(username: string){
    
    return this.http.get(this.url + username);

  }
  getRepo(_repo: string){
    return this.http.get(this.URL + this.username);
   
  }




  // getRepos(username:string){
  //   console.log("Repo service");
    
  //       let url = `${this.Repos}${username}/repos`;
    
    // let promise = new Promise((resolve, reject) => {
    //   fetch(url).then(res => {
    //     resolve(res.json());
    //     // return res.json();
    //   }).catch(e => {
    //     reject(e);
    //     console.log(e);
    //   });
    // });

    // return promise;

  // }     
}

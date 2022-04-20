import { Repos } from './../repos';
import { GithubReposService } from './../service/github-repos.service';
import { GithubService } from './../services/github.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Users } from '../users'

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css'],
  providers: [GithubService, GithubReposService],
})
export class SearchPageComponent implements OnInit {
  searchForm!: FormGroup;
  username!: any;
  repos!: any;
  reposArr: any[] = [];
  search!: any;
  // route: any;

  constructor(private route: Router, public GithubService: GithubService, public GithubReposService: GithubReposService) {
   
  }

  ngOnInit(): void {
  }
  searchUser() {
    this.route.navigate([`user/${this.username}`],{queryParams:{data: this.username}});
    
  }
  getRepo(){
    this.repos = this.searchForm.value.search;
    // this.route.navigate([`user/${this.username}/repos`],{queryParams: {data: this.username }})
  }
}


import { SearchPageComponent } from './../search-page/search-page.component';
import { GithubReposService } from './../service/github-repos.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Repos } from '../repos';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css'],
})
export class RepositoriesComponent implements OnInit {
  repos: any;
  search!: string;

  constructor(private http: HttpClient, private GithubReposService: GithubReposService) {}

  ngOnInit(): void {}

  collectRepos(search: any) {
    this.GithubReposService.getRepo(search);
    console.log(search);
    this.repos = this.GithubReposService.reposArr;
    
  }
}

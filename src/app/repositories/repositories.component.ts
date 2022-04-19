import { GithubReposService } from './../service/github-repos.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  newUser(search: any) {
    this.GithubReposService.getRepo(search);
    this.repos = this.GithubReposService.reposArr;
  }
}

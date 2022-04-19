import { Repos } from './../repos';
import { GithubReposService } from './../service/github-repos.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
  repos: any;
  search!: string;
  searchString!: string


  constructor(private GithubReposService: GithubReposService) { }

  ngOnInit(): void {}

  newUser(search: string)

}

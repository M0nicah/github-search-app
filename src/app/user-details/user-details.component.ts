import { GithubReposService } from './../service/github-repos.service';
import { Repos } from './../repos';
import { GithubService } from './../services/github.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from '../users';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  @Output() onSubmitForm: EventEmitter<any> = new EventEmitter
  

  username!: string;
  newUser!: Users;
  repos!: Repos;
  search: any;
  getRepo!: Repos;
  
  
  constructor(
    private active: ActivatedRoute,
    private GithubService: GithubService,
    private GithubReposService: GithubReposService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.active.queryParams.subscribe((params: any) => {
      this.search = params.data;
      this.onSubmitForm.emit(this.search)
      this.GithubService.getUser(this.search);
      this.newUser = this.GithubService.newUser;
      
      // console.log(params.data);
      // console.log(this.search);
    });

  }
}

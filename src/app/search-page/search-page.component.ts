
import { GithubService } from './../services/github.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Users } from '../users'

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css'],
  providers: [GithubService],
})
export class SearchPageComponent implements OnInit {
  searchForm!: FormGroup;
  username!: any;
  repo!: any;
  // route: any;

  constructor(private route: Router, public GithubService: GithubService) {
   
  }

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      username: new FormControl(null, [Validators.required]),
    });
  }
  searchUser() {
    this.username = this.searchForm.value.username;
    this.route.navigate([`user/${this.username}`],{queryParams:{data: this.username}});
  }
  // getRepo(){
  //   this.repo = this.searchForm.value.repos;
  //   this.route.navigate([`user/${this.repo}`],{queryParams: {data: this.username }})
  // }
}


import { GithubService } from './../services/github.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Repos } from '../repos';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css'],
  providers: [GithubService],
})
export class SearchPageComponent implements OnInit {
  searchForm!: FormGroup;
  username!: string;
  repo!: any;
  // route: any;

  constructor(private route: Router, public GithubService: GithubService) {
    this.GithubService.getRepo('',)
  }

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      username: new FormControl(null, [Validators.required]),
    });
  }
  searchUser() {
    this.username = this.searchForm.value.username;
    this.route.navigate([`user/${this.username}`]);
  }
  getRepo(){
    this.username = this.searchForm.value.repos;
    this.route.navigate([`user/${this.username}`])
  }
}

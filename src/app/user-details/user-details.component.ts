import { Repos } from './../repos';
import { GithubService } from './../services/github.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from '../users';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  @Input()
  // repo!: Repos;
  username!: string;
  newUser!: Users;
  repos!: any;
  search: any;

  constructor(
    private active: ActivatedRoute,
    private GithubService: GithubService,
    private route: Router
  ) {
    // this.active.params.subscribe((params) => {
    //   this.username = params['id'];
    // });
    // this.GithubService['getUser'](this.UserDetails).subscribe({
    //   complete: () => {
    //     console.log('data fetch successful!');
    //   },
    //   error: () => {
    //     //if the username is wrong:
    //     alert('User not found!');
    //     this.route.navigate(['search']);
    //   },
    //   next: (data: any = []) => {
    //     this.username = data;
    //     console.log(this.username);
    //   },
    // });
  }

  ngOnInit(): void {
    this.active.queryParams.subscribe((params: any) => {
      this.search = params.data
      this.GithubService.getUser(this.search);
      this.newUser = this.GithubService.newUser;
    });
  }
}

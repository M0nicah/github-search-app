import { Repos } from './../repos';
import { GithubService } from './../services/github.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  @Input()
  repo!: Repos;

  username!: string;
  UserDetails: any;
  repos: any;
  
  constructor(
    private active: ActivatedRoute,
    private GithubService: GithubService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.active.params.subscribe(params =>{
      this.username = params['id'];
      
    })
    this.active.params.subscribe(params =>{
      this.repo = params['repo']
    })

    this.GithubService.getUser(this.username).subscribe({
      complete: () => {console.log("data fetch successful!")},
      error: () => {
        //if the username is wrong:
        alert("User not found!")
        this.route.navigate(['search'])
      },
      next: (data: any = []) => {
        this.UserDetails = data;
        console.log(this.UserDetails);

      }
    });

  }


}

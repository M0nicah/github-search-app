import { GithubService } from './../services/github.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {

  username!: string;
  UserDetails: any;
  
  constructor(
    private active: ActivatedRoute,
    private GithubService: GithubService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.active.params.subscribe(params =>{
      this.username = params['id'];
      
    })

    this.GithubService.getUser(this.username).subscribe({
      complete: () => {console.log("done!")},
      error: () => {
        //if the username is wrong or cannot be found in all github:
        alert("User not found!")
        this.route.navigate(['search'])
      },
      next: (data: any = []) => {
        this.UserDetails = data;
        console.log(this.UserDetails);

      }
    })
  }


}

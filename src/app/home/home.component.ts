import { Component, OnInit } from '@angular/core';
import { Repos } from '../repos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'This is a simple Angular app that enables a user to search their favorite github user to see their work.';
  

  constructor() { }

  ngOnInit(): void {
  }

}

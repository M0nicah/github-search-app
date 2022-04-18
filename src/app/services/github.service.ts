import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { firstValueFrom } from 'rxjs';
import { Users } from '../users';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  [x: string]: any;
  url: string = 'https://api.github.com/users/';
  username!: string;

  constructor(private http: HttpClient) {}
}

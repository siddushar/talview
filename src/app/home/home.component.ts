import { Component, OnInit } from '@angular/core';
import { Router } from  '@angular/router';

import { AuthService } from  '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  repos: any;
  public isCollapsed: boolean[] = [];
  files: any;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  fetchRepos() {
    this.authService.listRepos()
    .subscribe((res) => {
      this.repos = res;
    },
    error => {
    console.log(error);
    
    });
  }

  onSelect(repo, i) {
    this.isCollapsed[i] = !this.isCollapsed[i];
    this.authService.listFiles(repo)
    .subscribe((res) => {
      this.files = res; 
    },
    error => {
    });
  }

  captureWeb() {
    this.router.navigateByUrl('/webcam');
  }

  logout() {
    this.router.navigateByUrl('/logout');
  }

}

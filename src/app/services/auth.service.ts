import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UserService } from  './user.service';

@Injectable({
  providedIn: 'root'
})


export class AuthService {

  private baseUrl = 'https://api.github.com';

  constructor(private http: HttpClient, private userService: UserService) { }

  login(username, password) {

    let encodedAuth =btoa(username+":"+password)
    return this.http.get(this.baseUrl+"/user", {
      headers: {
        'Authorization': 'Basic ' + encodedAuth
      }
    })
  }

  listRepos() {
    let loggedInUser = this.userService.getAuthUser();
    return this.http.get(this.baseUrl+'/users/' + loggedInUser +'/repos');
  }

  listFiles(repo) {
    let loggedInUser = this.userService.getAuthUser();
    return this.http.get(this.baseUrl+'/repos/' + loggedInUser + '/'+ repo  +'/contents');
  }

  commitFileToRepo() {
    let a = {
      "message": "my commit message",
      "committer": {
        "name": "siddu",
        "email": "siddushar@github.com"
      },
      "content": "first commit"
    }

    let loggedInUser = this.userService.getAuthUser();

    // let createFileUrl = this.baseUrl + '/repos/' + loggedInUser + '/'+ 'demo'  + "/contents/" +"so-test.txt"
    // return this.http.put(createFileUrl, a)
  }

  logout() {
    this.userService.logoutUser();
  }
}

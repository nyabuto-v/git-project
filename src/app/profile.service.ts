import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class ProfileService {
  private username:string;
  private clientid = '88349eee8071659d6a69';
  private clientsecret = '4fd3e72b5d0c887d7f0deb0cf8814f585bbcf1c0';

  constructor(private http:Http) { 
    console.log("service is now ready!");
    this.username = 'nyabuto-v';
}

getProfileInfo(){
  return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret).map(res => res.json());
  }

getProfileRepos(){
  return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret).map(res => res.json());
  }

  updateProfile(username:string){
    this.username = username;
  }
}

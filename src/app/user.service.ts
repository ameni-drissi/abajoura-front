import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  
  private registerUserUrl = "http://localhost:5500/users/register";
  private loginUserUrl = "http://localhost:5500/users/login";

  constructor(private http: HttpClient) { }


  //register and login//

  registerAdmin(user: User) {
    return this.http.post<any>(this.registerUserUrl, user);
  }
  loginAdmin(user: User) {
    return this.http.post<any>(this.loginUserUrl, user);
  }
}

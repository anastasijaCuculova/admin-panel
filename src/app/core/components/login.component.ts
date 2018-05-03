import {Component, OnInit} from '@angular/core';
import {LoginService} from "../services/login.service";

@Component({
  selector: 'home-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  users = [];
  userToLogin;

  constructor(private loginService: LoginService) {
  }

  ngOnInit(): void {
    this.loadUsers();
    this.userToLogin = this.loginService.getUserById(1);
  }

  loadUsers() {
    // this.users = this.loginService.getUsers();
    // console.log(this.users)
  }

  logout() {
  }
}

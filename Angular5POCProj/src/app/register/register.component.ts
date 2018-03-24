import { Component, OnInit } from '@angular/core';
import { UserRegister } from '../amo/user-register';
import { UserServiceService } from '../service/user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  gender = ['male', 'female'];

  userRegister: UserRegister = new UserRegister();

  submitted = false;

  constructor(private userService: UserServiceService) {
  }

  ngOnInit() {
  }

  onSubmit() { this.submitted = true; }

  // This is only used for debugging the values
  get diagnostic() { return JSON.stringify(this.userRegister); }

  newUser() {
    this.userService.saveUser(this.userRegister);
  }


}

import { UserRegister } from '../amo/user-register';
import { Injectable } from '@angular/core';


@Injectable()
export class UserServiceService {

  constructor() {

  }

  saveUser(userRegister: UserRegister) {
    console.log('I am inside UserServiceService.....');
    console.log(userRegister.firstName);
    console.log(userRegister.lastName);
    console.log('Calling HTTP service.....');
  }
}

export class UserRegister {

  firstName: String;
  lastName: String;
  email: String;
  phoneNumber: number;
  gender: String;

  constructor() {
  }

  fullName(): String {
    return '${this.firstName} ${this.lastName}';
  }

}

class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return this._email.toUpperCase()
  }

  set email(value) {
    this._email = value;
  }
  
  get password() {
    return `${this._password}sanjay`;
  }

  set password(value) {
    this._password = value;
  }
}

const sanjay = new User("s@sanjay.ai", "abc");
console.log(sanjay.password);

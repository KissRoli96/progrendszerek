export class User {
    _id: string;
    name: string;
    email: string;
    age: number;
    password: string;
    birthdate: string;

  constructor(_id: string, name: string, email: string, age: number, password: string, birthdate: string) {
    this._id = _id;
    this.name = name;
    this.email = email;
    this.age = age;
    this.password = password;
    this.birthdate = birthdate;
  }
}

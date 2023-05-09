import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent {

  user: User = new User('','', '', 0, '', '');

  constructor(private userService: UserService) { }

  onSubmit() {
    this.userService.createUser(this.user).subscribe((response) => {
      console.log(response);
      alert('User created successfully!');
    }, (error) => {
      console.error(error);
      alert('Failed to create user!');
    });
  }

}

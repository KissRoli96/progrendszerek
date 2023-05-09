import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [];

  constructor(private userService: UserService,private router: Router) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users: User[]) => {
      this.users = users;
    });
  }

  showUpdateUserForm(id: string) {
    this.router.navigate([`users/update/${id}`]);
  }

  showUserDetails(id: string): void {
    this.router.navigate(['/users', id]);
  }

  deleteUser(id: string) {
    if (confirm("Are you sure you want to delete this user?")) {
      this.userService.deleteUser(id).subscribe(
        (response: any) => {
          console.log(response);
          alert("User deleted successfully");
          this.users = this.users.filter((user) => user._id !== id);
        },
        (error: any) => {
          console.log(error);
          alert("Failed to delete user");
        }
      );
    }
  }

}

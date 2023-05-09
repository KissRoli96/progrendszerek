import { Component } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user.model';
import { Product } from './product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'my-progrendszerek-app';

  users: User[] = [];

  constructor(private userService: UserService, private router: Router) { }
  
  showCreateUserForm() {
    this.router.navigate(['users/create']);
  }

  showUpdateUserForm(userId: string) {
    this.router.navigate([`users/update/${userId}`]);
  }

  showCreateProductForm() {
    this.router.navigate(['products/create']);
  }

  showUpdateProductForm(productId: string) {
    this.router.navigate([`products/update/${productId}`]);
  }

  ngOnInit() {
    this.userService.getUsers().subscribe((users: User[]) => this.users = users);
  }

}

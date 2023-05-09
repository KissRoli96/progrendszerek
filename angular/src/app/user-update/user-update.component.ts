import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  user: User = new User('','', '', 0, '', '');

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.getUser(this.route.snapshot.params['id']);
  }

  getUser(id: string) {
    this.userService.getUser(id).subscribe((data: Object) => {
      this.user = data as User;
    });
  }

  updateUser() {
    this.userService.updateUser(this.user['_id'], this.user).subscribe(() => {
      this.router.navigate(['/users']);
    });
  }
}
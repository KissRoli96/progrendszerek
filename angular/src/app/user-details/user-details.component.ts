import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user: User = new User('', '', '', 0, '', ''); // inicilizálás az alapértelmezett értékre

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const userId = this.route.snapshot.params['id'];
    this.userService.getUser(userId).subscribe((user: User) => {
      this.user = user;
    });
  }

}
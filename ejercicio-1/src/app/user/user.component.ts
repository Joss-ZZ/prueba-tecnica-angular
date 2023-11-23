import { Component } from '@angular/core';
import { UserService } from './user.service';
import { UserList } from './interfaces/userList';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  users: UserList[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getData().subscribe(userList => {
      this.users = userList;
    })
  }
}

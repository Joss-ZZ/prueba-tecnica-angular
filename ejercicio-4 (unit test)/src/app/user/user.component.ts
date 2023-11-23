import { Component } from '@angular/core';
import { UserService } from './user.service';
import { UserList } from './interfaces/userList';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  users: UserList[] = [];
  saldoMayor: number = 0;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe((userList) => {
      this.users = userList;
      this.saldoMayor = userList.reduce(
        (maxSaldo, user) =>
          user.saldoDisponible > maxSaldo ? user.saldoDisponible : maxSaldo,
        0
      );
    });
  }
}

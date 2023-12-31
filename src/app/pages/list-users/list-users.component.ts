import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css'],
})
export class ListUsersComponent implements OnInit, OnDestroy {
  list: string[] = [];
  listUsers: User[] = [];
  result = 0;
  constructor(private _router: Router, private _userService: UserService) {

  }

  ngOnInit(): void {
    console.log("I m mounted");
    this.list = this._userService.list;
    //this.listUsers = this._userService.getAllUsers();
    this._userService.fetchUsers().subscribe({
      next: (data) => this.listUsers = data as User[],
      error: (err) => console.log("error")
    }
    );
  }

  ngOnDestroy(): void {
    console.log("I m unmounted");
  }
  ToDetails(user: User) {
    this._router.navigate(['user', user.id, user.firstName]);
  }
  Calculer() {

    this.result = this._userService.fetchNbInList(
      this.listUsers,
      'email',
      'mila@kunis.com'
    );
  }
  deleteuser(id: number) {
    this._userService.removeUser(id).subscribe({
      next: () => { this.listUsers = this.listUsers.filter(user => user.id === id) }
    })
  }
}

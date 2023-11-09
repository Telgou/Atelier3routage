import { Injectable } from '@angular/core';
import { User } from '../core/user';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiurl = environment.baseUrl+'users/';
  list: string[] = ['a', 'b'];
  listUsers: User[] = [
    {
      id: 1,
      firstName: 'Mila',
      lastName: ' Kunis',
      birthDate: '1999-06-30',
      accountCategory: 'Admin',
      email: 'mila@kunis.com',
      password: 'test',
      picture: 'https://bootdey.com/img/Content/avatar/avatar3.png',
      profession: 'Software Engineer',
    },
    {
      id: 2,
      firstName: 'George',
      lastName: 'Clooney',
      birthDate: '1999-06-30',
      accountCategory: 'Customer',
      email: 'marlon@brando.com',
      password: 'test',
      picture: 'https://bootdey.com/img/Content/avatar/avatar2.png',
      profession: 'Software Engineer',
    },
    {
      id: 3,
      firstName: 'George',
      lastName: 'Clooney',
      birthDate: '1999-06-30',
      accountCategory: 'Customer',
      email: 'marlon@brando.com',
      password: 'test',
      picture: 'https://bootdey.com/img/Content/avatar/avatar1.png',
      profession: 'Software Engineer',
    },
    {
      id: 4,
      firstName: 'Ryan',
      lastName: 'Gossling',
      birthDate: '1999-06-30',
      accountCategory: 'Golden',
      email: 'Ryan@nicholson.com',
      password: 'test',
      picture: 'https://bootdey.com/img/Content/avatar/avatar4.png',
      profession: 'Software Engineer',
    },
    {
      id: 5,
      firstName: 'Robert',
      lastName: 'Downey',
      birthDate: '1999-06-30',
      accountCategory: 'Blocked Account',
      email: 'robert@nicholson.com',
      password: 'test',
      picture: 'https://bootdey.com/img/Content/avatar/avatar5.png',
      profession: 'Software Engineer',
    },
  ];
  constructor(private _http: HttpClient) {

  }

  getAllUsers() {
    return new Observable((o) => {
      o.next(this.listUsers),
        o.error('error'),
        o.complete()
    });
  }
  getList() {
    return this.list;
  }

  addToList(variable: string) {
    this.list.push(variable);
  }
  fetchNbInList(list: any, attribute: string, attributeVal: string) {
    return list.filter((e: any) => e[attribute] === attributeVal).length;
  }

  fetchUsers() {
    return this._http.get(this.apiurl);
  }
  fetchUserById(id: number) {
    return this._http.get(this.apiurl + id);
  }
  addUser(user: User) {
    return this._http.post(this.apiurl, User);
  }
  updateUser(id: number, user: User) {
    return this._http.put(this.apiurl + id, User);
  }
  removeUser(id: number) {
    return this._http.delete(this.apiurl + id);
  }
}
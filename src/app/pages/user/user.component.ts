import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/core/user';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  id: string | null ='';
  user! : User;
  constructor(private _activated: ActivatedRoute, private _userService: UserService) {

    /** pathParam exemple localhsot:4200/user/1/test*/
    this._activated.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.log(params.get('name'))
      console.log(params.get('id'));
    })
    this._activated.params.subscribe((params) => {
      console.log(params['name']);
      console.log(params['id']);
    });
    console.log(this._activated.snapshot.paramMap.get('name'));
    console.log(this._activated.snapshot.params['name']);
    
    /** Query Param exemple : localhost:4200/user/1/test?min=5 */
    this._activated.queryParamMap.subscribe((params) => {
      console.log(params.get('min'));
    });
   }

   ngOnInit(): void {
    this._userService.fetchUserById(parseInt(this.id!)).subscribe({
      next: (data) => this.user = data as User,
      error: (err) => console.log("error")
    }
    );
  }


}

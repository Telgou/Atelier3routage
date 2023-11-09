import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { ListUsersComponent } from 'src/app/pages/list-users/list-users.component';
import { UserComponent } from 'src/app/pages/user/user.component';
import { FormuserComponent } from 'src/app/pages/formuser/formuser.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [HomeComponent, ListUsersComponent, UserComponent, FormuserComponent],
  imports: [CommonModule, UserRoutingModule,FormsModule]
})
export class UserModule {}

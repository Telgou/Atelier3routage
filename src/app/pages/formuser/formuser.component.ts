import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from 'src/app/core/user';

@Component({
  selector: 'app-formuser',
  templateUrl: './formuser.component.html',
  styleUrls: ['./formuser.component.css']
})
export class FormuserComponent {
  user! : User;

  add(f: NgForm) {
    console.log(f.value)
    console.log("function works !")
  }

}

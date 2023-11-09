import { Component } from '@angular/core';
import { Invoice } from 'src/app/models/Invoice';
import { Router } from '@angular/router';
import { InvoiceService } from 'src/app/services/invoice.service';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css']
})
export class InvoiceListComponent {
  list : Invoice[] = [];
  constructor(private router: Router, private _invoiceService: InvoiceService) { }

  handlenav(fact: Invoice) {
    this.router.navigate(['/maininvoice/invoice'], { queryParams: { id: fact.id, Status: fact.Status } });
  }

  ngOnInit(): void {
    console.log("I m mounted");
    //this.list = this._invoiceService.listInvoice;
    //this.listUsers = this._userService.getAllUsers();
    this._invoiceService.fetchUsers().subscribe({
      next: (data) => this.list = data as Invoice[],
      error: (err) => console.log("error")
    }
    );
  }
}
export const list: Invoice[] = [
  {
    id: 1, billAmount: 120, discountAmount: 10, dateBill: "12/12/2021",
    Status: true
  },
  {
    id: 2, billAmount: 1020, discountAmount: 90, dateBill: "22/11/2020"
    , Status: true
  },
  {
    id: 3, billAmount: 260, discountAmount: 30, dateBill: "18/10/2020",
    Status: false
  },
  {
    id: 4, billAmount: 450, discountAmount: 40, dateBill: "14/12/2020",
    Status: true
  },
]
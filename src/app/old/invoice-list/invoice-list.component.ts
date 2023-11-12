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
  list: Invoice[] = [];
  invoice: Invoice = new Invoice() || null;
  addform: boolean = false;
  modifyform: boolean = false;
  constructor(private router: Router, private _invoiceService: InvoiceService) { }

  enableform(x: number, invoice?: Invoice) {
    if (x == 1) {
      this.modifyform = false;
      this.invoice = new Invoice(); // Reset the invoice object
      this.addform = true;
    }
    else {
      this.addform = false;
      this.modifyform = true;
      if (invoice !== undefined) this.invoice = invoice;
      console.log(invoice)
    }
  }
  handlenav(fact: Invoice) {
    this.router.navigate(['/maininvoice/invoice'], { queryParams: { id: fact.id, Status: fact.Status } });
  }

  ngOnInit(): void {
    console.log("I m mounted");
    //this.list = this._invoiceService.listInvoice;
    //this.listUsers = this._userService.getAllUsers();
    this.fetch();
  }
  fetch() {
    this._invoiceService.fetchInvoices().subscribe({
      next: (data) => this.list = data as Invoice[],
      error: (err) => console.log(err)
    }
    );
  }
  add(fact: Invoice) {
    console.log(fact)
    this._invoiceService.addInvoice(fact).subscribe({
      next: (data) => {
        this.invoice = data as Invoice;
        this.fetch();
      },
      error: (err) => console.log(err)
    })
  }

  modify(fact: Invoice) {
    this._invoiceService.updateInvoice(fact.id, fact).subscribe({
      next: () => {
        this.fetch();
      },
      error: (err) => console.log(err)
    })
  }

  remove(fact: Invoice) {
    this._invoiceService.removeInvoice(fact.id).subscribe({
      next: (data) => {
        this.list = data as Invoice[];
        this.fetch();
      },
      error: (err) => console.log(err)
    })
  }


}
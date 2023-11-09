import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
//import { list } from '../invoice-list/invoice-list.component';
import { Invoice } from 'src/app/models/Invoice';
import { InvoiceService } from 'src/app/services/invoice.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent {
  list!: Invoice[];
  fact!: Invoice | undefined;
  id!: number | null;
  constructor(private _activated: ActivatedRoute, private router: Router, private _invoiceService: InvoiceService) {

    /* using query params */
    this._activated.queryParamMap.subscribe(params => {
      let idstring = parseInt(params.get('id')!);
      this.id = (idstring) || null;
      //let fact=list.find(this.id)
      //this.fact = this.list.find((invoice) => invoice.id === this.id);
      //console.log(this.list);

    });
    /* using url param */
    if (this.id == null) {
      this._activated.paramMap.subscribe(params => {
        let idstring = parseInt(params.get('id') || '');
        this.id = idstring;
        console.log(idstring);
      })
    }

  }

  ngOnInit(): void {
    console.log("I am mounted");
    //this.list = this._invoiceService.listInvoice;
    //this.listUsers = this._userService.getAllUsers();
    this._invoiceService.fetchInvoiceById(this.id!).subscribe({
      next: (data) => {
        this.fact = data as Invoice;
        console.log(data);

      },
      error: (err) => {
        console.log("error")
        /* if id passed as query param is not found in list router navigates back to the invoice list*/
        if (!this.fact) {
          this.router.navigate(['/maininvoice']);
        }

      }
    }
    );
  }

}
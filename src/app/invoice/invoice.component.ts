import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { list } from '../invoice-list/invoice-list.component';
import { Invoice } from '../models/Invoice';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent {
  list = list;
  fact!: Invoice | undefined;
  id!: string | null;
  constructor(private _activated: ActivatedRoute, private router: Router) {

    /* using query params */
    this._activated.queryParamMap.subscribe(params => {
      this.id = params.get('id')|| null;
      //let fact=list.find(this.id)
    });

    /* using url param */
    if (this.id == null) {this._activated.paramMap.subscribe(params => {
      this.id=params.get('id');
    })}
    
    this.fact = list.find((invoice) => invoice.idFacture.toString() === this.id);

    /* if id passed as query param is not found in list router navigates back to the invoice list*/
    if (!this.fact) {
      this.router.navigate(['/invoicemanagement']);
    }

  }
}
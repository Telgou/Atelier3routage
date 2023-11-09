import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { invoiceRoutingModule } from './Invoice-routing.module';
import { FormsModule } from '@angular/forms';
import { MainInvoiceComponent } from 'src/app/old/main-invoice/main-invoice.component';
import { InvoiceComponent } from 'src/app/old/invoice/invoice.component';
import { InvoiceListComponent } from 'src/app/old/invoice-list/invoice-list.component';


@NgModule({
  declarations: [MainInvoiceComponent, InvoiceComponent, InvoiceListComponent],
  imports: [CommonModule, invoiceRoutingModule, FormsModule],
})
export class InvoiceModule {}

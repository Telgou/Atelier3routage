import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainInvoiceComponent } from 'src/app/old/main-invoice/main-invoice.component';
import { InvoiceComponent } from 'src/app/old/invoice/invoice.component';

const routes: Routes = [
  { path: 'maininvoice', component: MainInvoiceComponent },
  { path: 'invoice/:id/:active', component: InvoiceComponent },
  { path: 'invoice', component: InvoiceComponent },
  { path: '**', component: MainInvoiceComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class invoiceRoutingModule { }

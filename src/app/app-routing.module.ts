import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceComponent } from './invoice/invoice.component';
import { MainInvoiceComponent } from './main-invoice/main-invoice.component';

const routes: Routes = [
  { path: "invoicemanagement", component: MainInvoiceComponent },
  { path: 'invoice/:id/:active', component: InvoiceComponent },
  { path: 'invoice', component: InvoiceComponent },
  { path: '**', component: MainInvoiceComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
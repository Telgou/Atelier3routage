import { Injectable } from '@angular/core';
import { Invoice } from '../models/Invoice';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  apiurl = environment.baseUrl + 'invoices/';
  list: string[] = ['a', 'b'];
  listInvoice!: Invoice[];

  constructor(private _http: HttpClient) {
  }

  getAllInvoices() {
    return new Observable((o) => {
      o.next(this.listInvoice),
        o.error('error'),
        o.complete()
    });
  }
  getList() {
    return this.list;
  }

  addToList(variable: string) {
    this.list.push(variable);
  }
  fetchNbInList(list: any, attribute: string, attributeVal: string) {
    return list.filter((e: any) => e[attribute] === attributeVal).length;
  }

  fetchInvoices(): Observable<Invoice[]> {
    console.log(this._http.get<Invoice[]>(this.apiurl));
    return this._http.get<Invoice[]>(this.apiurl);
  }
  fetchInvoiceById(id: number) {
    return this._http.get(this.apiurl + id);
  }
  addInvoice(invoice: Invoice): Observable<Invoice> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this._http.post<Invoice>(this.apiurl, invoice, httpOptions);
  }
  updateInvoice(id: number, invoice: Invoice) {
    return this._http.put(this.apiurl + id, invoice);
  }
  removeInvoice(id: number) {
    return this._http.delete(this.apiurl + id);
  }
}

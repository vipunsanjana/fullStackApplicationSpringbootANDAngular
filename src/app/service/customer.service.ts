import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl = ['http://localhost:8080'];

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  postCustomer(customer: any): Observable<any> {
    return this.http.post(baseUrl + '/api/customer', customer);
  }

  getAllCustomer(): Observable<any> {
    return this.http.get(baseUrl + '/api/customers');
  }

  getCustomerById(id:number): Observable<any> {
    return this.http.get(baseUrl + '/api/customer/'+id);
  }

  updateCustomer(id:number,customer:any): Observable<any> {
    return this.http.put(baseUrl + '/api/customer/'+id,customer);
  }

  deleteCustomer(id:number): Observable<any> {
    return this.http.delete(baseUrl + '/api/customer/'+id);
  }
}

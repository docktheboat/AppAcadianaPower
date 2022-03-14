import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {HttpClient} from '@angular/common/http';
import { Customer } from "./customer";
import { environment } from "src/environments/environment";


@Injectable({
    providedIn: 'root'
})
export class CustomerService {
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) { }

    public getCustomers() : Observable<Customer[]>{
        return this.http.get<Customer[]>(`${this.apiServerUrl}/Customer/allCustomers`)
    }

    public deleteCustomer(email : String) : Observable<void> {
        return this.http.delete<void>(`${this.apiServerUrl}/deleteCustomer/${email}`)
    }

    public addCustomer(customer : Customer): Observable<String> {
        return this.http.post<String>(`${this.apiServerUrl}/Customer/newCustomer`,customer);
    }

    public getCustomerByEmail(email : String): Observable<Customer> {
        return this.http.get<Customer>(`${this.apiServerUrl}/customerByEmail/${email}`);
    }

    public getCustomersByZipCode(zipCode : number): Observable<Customer[]> {
        return this.http.get<Customer[]>(`${this.apiServerUrl}/Customer/customersByZip/${zipCode}`);
    }

}
import { HttpErrorResponse } from '@angular/common/http'
import { Component } from '@angular/core'
import { OnInit } from '@angular/core'
import { NgForm } from '@angular/forms'
import { Customer } from './customer'
import { CustomerService } from './customer.service'
declare var $: any;

@Component({
    templateUrl: 'customer.component.html',
    styleUrls : ['./customer.component.css']
})
export class CustomerComponent implements OnInit{
    public customers : Customer[] | undefined
    public message : String | undefined
    


    constructor(private customerService: CustomerService){

    }

ngOnInit(): void {
    this.getCustomers()
}


public getCustomers(){
    this.customerService.getCustomers().subscribe(
        (response : Customer[]) => {
            this.customers = response;
        },
        (error : HttpErrorResponse) => {
            alert(error.message);
        }
    )
}

public deleteCustomer(email : String){
    this.customerService.deleteCustomer(email).subscribe(
        (response : void) => {
            this.getCustomers()
        },
        (error : HttpErrorResponse) => {
            alert(error.message);
        }
    )
}

public addCustomer(addForm : NgForm){
    this.customerService.addCustomer(addForm.value).subscribe(
        (response : String) =>{
            this.message = response;
            this.getCustomers()
        },
        (error : HttpErrorResponse) => {
            alert(error.message)
        }
    )
}


}
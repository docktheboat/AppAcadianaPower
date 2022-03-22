import { HttpErrorResponse } from "@angular/common/http";
import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { EmailService } from "./email.service";

@Component({
    templateUrl: 'email.component.html',
    styleUrls: ['./email.component.css']
})
export class EmailComponent {

    constructor(private emailService : EmailService){}

    public reportOutage(email : NgForm){
        this.emailService.sendEmail(email.value).subscribe(
            (response : void) => {

            },
            (error : HttpErrorResponse) => {
                alert(error.message);
            }
        )
    }

}
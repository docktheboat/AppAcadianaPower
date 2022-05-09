import { HttpErrorResponse } from "@angular/common/http";
import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { AlertConfirmComponent } from "../alert-confirm/alert-confirm.component";
import { EmailService } from "./email.service";

interface ServiceType{
    value: string;
}
interface ServiceAreas{
    value: number;
}

@Component({
    templateUrl: 'email.component.html',
    styleUrls: ['./email.component.css']
})
export class EmailComponent {
    serviceTypes: ServiceType[] = [
        {value: 'INTERNET'},
        {value: 'ELECTRIC'},
      ];

      serviceAreas : ServiceAreas[] = [
        {value : 70506},
        {value : 70508},
        {value : 70501},
        {value : 70502},
        {value : 70503},
        {value : 70507},
        {value : 70583},
        {value : 70518},
        {value : 70517},
        {value : 70592},
        {value : 70520},
        {value : 70563},
        {value : 70560},
       ]

    constructor(private emailService : EmailService,
        public dialog : MatDialog){}

    public reportOutage(email : NgForm){
        this.emailService.sendEmail(email.value).subscribe(
            (response : void) => {

            },
            (error : HttpErrorResponse) => {
                alert(error.message);
            }
        )
    }

    public closeReportDialog(){
        this.dialog.closeAll();
    }
    public openAlertDialog(){
        this.dialog.open(AlertConfirmComponent);
    }

}
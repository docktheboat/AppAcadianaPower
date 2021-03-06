import {Outage} from './outage';
import { OutageService } from './outage.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';


@Component({
 // selector: 'app-root',
  templateUrl: './outage.component.html',
  styleUrls: ['./outage.component.css']
})
export class OutageComponent implements OnInit{
  public outages : Outage[] | undefined
  public addmessage : String | undefined

  constructor(private outageService : OutageService){
    
  }

  ngOnInit(): void {
    this.getOutages();
  }


  public getOutages() {
    this.outageService.getOutages().subscribe(
      (response : Outage[]) => {
        this.outages = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    )
  }

  public isResolved(recovery : number[]) : String {
    let hrs = recovery[0]
    let mins = recovery[1]
    if ((hrs + mins) <= 0 ){
      return "RESOLVED";
    } 
    return hrs+"hrs/"+mins+"mins";
  }

  public getOutagesByRecovery() {
    this.outageService.getByRecovery().subscribe(
      (response : Outage[]) => {
        this.outages = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    )
  }

  public getByCreation(){
    this.outageService.getByCreation().subscribe(
      (response : Outage[]) => {
        this.outages = response;
      },
      (error : HttpErrorResponse) => {
        alert(error.message)
      }
    )
  }

  public deleteOutage(type:String,zipCode:number) {
    this.outageService.deleteOutage(type,zipCode).subscribe(
      (response : void) => {
        this.getOutages();
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    )
  }

  public addOutage(form : NgForm) {
    this.outageService.addOutage(form.value).subscribe(
      (response : String) => {
        this.addmessage = response;
        this.getOutages();
      },
      (error: HttpErrorResponse) => {
       /* alert(error.message)*/
       this.getOutages();
      }
    )
  }

  public getIcon(type : String) : String{
    if(type.toLowerCase() == "electric") return "fa-solid fa-bolt"
    if(type.toLowerCase() == "internet") return "fa-solid fa-wifi"
    return ""
  }

  
}

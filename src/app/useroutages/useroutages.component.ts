import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { OutageComponent } from '../outage';
import { Outage } from '../outage/outage';
import { OutageService } from '../outage/outage.service';

@Component({
  selector: 'app-useroutages',
  templateUrl: './useroutages.component.html',
  styleUrls: ['./useroutages.component.css']
})
export class UseroutagesComponent implements OnInit {
  public outages : Outage[] | undefined

  constructor(private outageService : OutageService) { }

  ngOnInit(): void {
    this.getOutages();
  }

  public getOutages() {
    this.outageService.getOutages().subscribe(
      (response : Outage[] ) => {
        this.outages = response;
      },
      (error : HttpErrorResponse) => {
        
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



}

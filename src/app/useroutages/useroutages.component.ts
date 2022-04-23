import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Outage } from '../outage/outage';
import { OutageService } from '../outage/outage.service';

@Component({
  selector: 'app-useroutages',
  templateUrl: './useroutages.component.html',
  styleUrls: ['./useroutages.component.css']
})
export class UseroutagesComponent implements OnInit {
  public outages : Outage[] | undefined

  constructor(private outageService : OutageService ) { }

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

}

import { Component } from '@angular/core'
import { WeatherService } from '../weather/weather.service'
import { OnInit } from '@angular/core'
import { Weather } from '../weather/weather'
import { HttpErrorResponse } from '@angular/common/http'
import { CensusMap } from '../map/map'
import { MapService } from '../map/map.service'
import { Outage } from '../outage/outage'
import { OutageService } from '../outage/outage.service'
import { EmailComponent } from '../email/email.component'
import { MatDialog } from '@angular/material/dialog'

@Component({
    templateUrl: 'user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
    public weatherInfo : Weather[] | undefined
    public iconClass : String | undefined
    public iconID : String | undefined
    public day : number | undefined
    public month : String | undefined
    public months = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

    constructor(private weatherService: WeatherService,
        private mapService: MapService, private outageService : OutageService,
        public dialog : MatDialog){}

    ngOnInit(): void {
        this.getWeather();
        this.setDate();
    }

    public setDate(){
        var date = new Date();
        date.setHours(date.getHours() - 5); // UTC to CST
        this.day = date.getUTCDate();
        this.month = this.months[date.getMonth()].substring(0,3);
    }

    public openReportDialog(){
        this.dialog.open(EmailComponent)
      }


    public getWeather(){
        this.weatherService.getWeather().subscribe(
            (response : Weather) => {
                this.iconClass = this.weatherService.getIcon(response.conditions);
                this.iconID = this.weatherService.getIconID(response.conditions);
                this.weatherInfo = [response];
            },
            (error: HttpErrorResponse) => {
                alert(error.message);
            }
        )
    }




}
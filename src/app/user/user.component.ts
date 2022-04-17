import { Component } from '@angular/core'
import { WeatherService } from '../weather/weather.service'
import { OnInit } from '@angular/core'
import { Weather } from '../weather/weather'
import { HttpErrorResponse } from '@angular/common/http'
import { CensusMap } from '../map/map'
import { MapService } from '../map/map.service'
import { Outage } from '../outage/outage'
import { OutageService } from '../outage/outage.service'

@Component({
    templateUrl: 'user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
    public weatherInfo : Weather[] | undefined
    public mapInfo : CensusMap[] | undefined
    public iconClass : String | undefined
    public iconID : String | undefined
    public day : number | undefined
    public month : String | undefined
    public mostRecentOutages : Outage[] | undefined 
    public months = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

    constructor(private weatherService: WeatherService,
        private mapService: MapService, private outageService : OutageService){}

    ngOnInit(): void {
        this.getWeather();
        this.getAllMapInfo();
        this.setDate();
        this.setMostRecentOutages();
    }

    public setDate(){
        var date = new Date();
        date.setHours(date.getHours() - 5); // UTC to CST
        this.day = date.getUTCDate();
        this.month = this.months[date.getMonth()].substring(0,3);
    }

    public setMostRecentOutages(){
        this.outageService.getByCreation().subscribe(
            (response : Outage[]) => {
             this.mostRecentOutages = response;
            },
            (error : HttpErrorResponse) => {
              /*alert(error.message)*/
            }
          )
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

    public getAllMapInfo(){
        this.mapService.allInfo().subscribe(
            (response : CensusMap[]) =>{
                this.mapInfo = response;
            },
            (error: HttpErrorResponse) => {
                alert(error.message);
            }
        )
    }

    public getTractByZip(zipCode : number){
        this.mapService.tractByZip(zipCode).subscribe(
            (response : CensusMap[]) =>{
                this.mapInfo = response;
            },
            (error: HttpErrorResponse) => {
                alert(error.message);
            }
        )
    }

}
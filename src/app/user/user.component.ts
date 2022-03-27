import { Component } from '@angular/core'
import { WeatherService } from '../weather/weather.service'
import { OnInit } from '@angular/core'
import { Weather } from '../weather/weather'
import { HttpErrorResponse } from '@angular/common/http'
import { CensusMap } from '../map/map'
import { MapService } from '../map/map.service'

@Component({
    templateUrl: 'user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
    public weatherInfo : Weather[] | undefined
    public mapInfo : CensusMap[] | undefined
    public iconClass : String | undefined

    constructor(private weatherService: WeatherService,
        private mapService: MapService){}

    ngOnInit(): void {
        this.getWeather();
        this.getAllMapInfo();
    }

    public getWeather(){
        this.weatherService.getWeather().subscribe(
            (response : Weather) => {
                this.iconClass = this.weatherService.getIcon(response.conditions);
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
import { Component } from '@angular/core'
import { WeatherService } from '../weather/weather.service'
import { OnInit } from '@angular/core'
import { Weather } from '../weather/weather'
import { HttpErrorResponse } from '@angular/common/http'

@Component({
    templateUrl: 'user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
    public weatherInfo : Weather[] | undefined
    public iconClass : String | undefined

    constructor(private weatherService: WeatherService){}

    ngOnInit(): void {
        this.getWeather();
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
}
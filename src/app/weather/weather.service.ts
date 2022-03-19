import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {HttpClient} from '@angular/common/http';
import { environment } from "src/environments/environment";
import { Weather } from "./weather";

@Injectable({
    providedIn: 'root'
})
export class WeatherService {
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) { }

    public getWeather() : Observable<Weather> {
        return this.http.get<Weather>(`${this.apiServerUrl}/Weather`)
    }

    public getIcon(c : String) : String {
        if(c.includes("clear")) return "fa-solid fa-sun"
        if(c.includes("rain")) return "fa-solid fa-cloud-rain"
        if(c.includes("thunderstorm")) return "fa-solid fa-cloud-bolt"
        if(c.includes("snow")) return "fa-solid fa-snowflake"
        if(c.includes("mist")) return "fa-solid fa-cloud-fog"
        if(c.includes("clouds")) return "fa-solid fa-cloud"
        return "";
    }
}
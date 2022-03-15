import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {HttpClient} from '@angular/common/http';
import { Outage } from "./outage";
import { environment } from "src/environments/environment";


@Injectable({
    providedIn: 'root'
})
export class OutageService {
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) { }

    public getOutages(): Observable<Outage[]> {
        return this.http.get<Outage[]>(`${this.apiServerUrl}/Outages/getAll`)
    }

    public addOutage(outage : Outage): Observable<String> {
        return this.http.post<String>(`${this.apiServerUrl}/Outages/add`, outage)
    }

    public getByRecovery(): Observable<Outage[]> {
        return this.http.get<Outage[]>(`${this.apiServerUrl}/Outages/getByRecovery`)
    }

    public deleteOutage(type : String, zipCode : number): Observable<void> {
        return this.http.delete<void>(`${this.apiServerUrl}/Outages/deleteOutage/${zipCode}/${type}`)
    }

    public getOutagesByZipCode(zipCode : number): Observable<Outage[]> {
        return this.http.get<Outage[]>(`${this.apiServerUrl}/area/${zipCode}`);
    }

    public getSpecificOutage(type : String, zipCode : number): Observable<Outage> {
        return this.http.get<Outage>(`${this.apiServerUrl}/Outages/specificOutage/${zipCode}/${type}`);
    }
}
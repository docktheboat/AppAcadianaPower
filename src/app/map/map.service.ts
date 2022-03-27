import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {HttpClient} from '@angular/common/http';
import { environment } from "src/environments/environment";
import { CensusMap } from "./map";


@Injectable({
    providedIn: 'root'
})
export class MapService {
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) { }

    public allInfo() : Observable<CensusMap[]> {
        return this.http.get<CensusMap[]>(`${this.apiServerUrl}/Map/allInfo`)
    }

    public tractByZip(zipCode : number) : Observable<CensusMap[]> {
        return this.http.get<CensusMap[]>(`${this.apiServerUrl}/Map/infoByZip/${zipCode}`)
    }

}
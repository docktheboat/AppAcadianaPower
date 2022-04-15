import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {HttpClient} from '@angular/common/http';
import { environment } from "src/environments/environment";
import { RegisterRequest } from "./register";


@Injectable({
    providedIn: 'root'
})
export class RegisterService {
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) { }


    public register(user : RegisterRequest): Observable<String> {
        return this.http.post<String>(`${this.apiServerUrl}/register`, user)
    }

}
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {HttpClient} from '@angular/common/http';
import { environment } from "src/environments/environment";
import { Email } from "./email";


@Injectable({
    providedIn: 'root'
})
export class EmailService {
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) { }

public sendEmail(email : Email) : Observable<void> {
    return this.http.post<void>(`${this.apiServerUrl}/Email/send`, email)
}


}
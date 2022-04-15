import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { OutageComponent } from './outage';
import { CustomerComponent } from './customer';
import { appRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register';
import { UserComponent } from './user';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { EmailComponent } from './email/email.component';



@NgModule({
  declarations: [
    OutageComponent,
    CustomerComponent,
    AppComponent,
    RegisterComponent,
    UserComponent,
    EmailComponent

    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    appRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

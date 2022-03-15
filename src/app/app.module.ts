import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { OutageService } from './outage/outage.service';
import { OutageComponent } from './outage';
import { AdminComponent } from './admin';
import { CustomerComponent } from './customer';
import { appRoutingModule } from './app.routing';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register';
import { UserComponent } from './user';

@NgModule({
  declarations: [
    OutageComponent,
    AdminComponent,
    CustomerComponent,
    HomeComponent,
    LoginComponent,
    AppComponent,
    RegisterComponent,
    UserComponent

    
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
    appRoutingModule
  ],
  providers: [OutageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

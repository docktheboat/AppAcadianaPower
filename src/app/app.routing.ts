import {Routes, RouterModule} from '@angular/router';
import { AdminComponent } from './admin';
import { CustomerComponent } from './customer';
import { OutageComponent } from './outage';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { UserComponent } from './user';

const routes: Routes = [
    {path: 'Admin', component: AdminComponent},
    {path: 'Customer', component: CustomerComponent},
    {path: 'Outages', component: OutageComponent},
    {path: 'Login', component: LoginComponent},
    {path: 'Register', component: RegisterComponent},
    {path: 'Dashboard', component: UserComponent},
    {path: '**', redirectTo: ''}
];

export const appRoutingModule = RouterModule.forRoot(routes);
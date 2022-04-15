import {Routes, RouterModule} from '@angular/router';
import { CustomerComponent } from './customer';
import { OutageComponent } from './outage';
import { RegisterComponent } from './register';
import { UserComponent } from './user';
import { EmailComponent } from './email/email.component';

const routes: Routes = [
    {path: 'Customer', component: CustomerComponent},
    {path: 'Outages', component: OutageComponent},
    {path: '', component: RegisterComponent},
    {path: 'Dashboard', component: UserComponent},
    {path: 'Report', component: EmailComponent},
    {path: '**', redirectTo: ''}
];

export const appRoutingModule = RouterModule.forRoot(routes);
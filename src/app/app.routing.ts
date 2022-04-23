import {Routes, RouterModule} from '@angular/router';
import { CustomerComponent } from './customer';
import { OutageComponent } from './outage';
import { RegisterComponent } from './register';
import { UserComponent } from './user';
import { EmailComponent } from './email/email.component';
import { UseroutagesComponent } from './useroutages/useroutages.component';
import { ServicemapComponent } from './servicemap/servicemap.component';
import { RadarComponent } from './radar/radar.component';

const routes: Routes = [
    {path: 'Customer', component: CustomerComponent},
    {path: 'Outages', component: OutageComponent},
    {path: '', component: RegisterComponent},
    {path: 'Dashboard', component: UserComponent},
    {path: 'outages', component: UseroutagesComponent},
    {path: 'map', component: ServicemapComponent},
    {path: 'Report', component: EmailComponent},
    {path: 'radar', component: RadarComponent},
    {path: '**', redirectTo: ''}
];

export const appRoutingModule = RouterModule.forRoot(routes);
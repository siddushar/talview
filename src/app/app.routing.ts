import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { WebcamComponent } from './webcam/webcam.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuard } from './auth.guard';

const appRoutes: Routes = [
  // { path: '', component: HomeComponent},
  //{ path: '', pathMatch: 'full', redirectTo: 'login'},
    { path: '', component: HomeComponent, canActivate: [AuthGuard]},
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'webcam', component: WebcamComponent, canActivate: [AuthGuard] },
    { path: 'logout', component: LogoutComponent, canActivate: [AuthGuard] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
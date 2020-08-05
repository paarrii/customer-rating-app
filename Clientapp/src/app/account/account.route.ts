import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const AccountRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
    },

    {
        path: 'login',
        component: LoginComponent
    }
]
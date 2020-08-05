import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { AccountRoutes } from './account.route';

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(AccountRoutes)
    ],
    exports: [],
    providers: [],
})

export class AccountModule {

}
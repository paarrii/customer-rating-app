import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { DashboardComponent } from './dashboard.componet';
import { RightContainerComponent } from './right-container/right-container.component';
import { LeftContainerComponent } from './left-container/left-container.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { dashboardRoutes } from './dashboard.route';
import { RouterModule } from '@angular/router';


@NgModule({
    declarations: [
        DashboardComponent,
        RightContainerComponent,
        LeftContainerComponent,
        HomeComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(dashboardRoutes)
    ],
    exports: [],
    entryComponents: [],
})

export class DashBoardModule { }
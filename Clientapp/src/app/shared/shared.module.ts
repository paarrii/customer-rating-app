import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../layout/header/header.component';
import { LayoutComponent } from '../layout/layout.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DemoMaterialModule } from './../demo-material-module';

@NgModule({
    declarations: [
        LayoutComponent,
        HeaderComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        FlexLayoutModule,
        DemoMaterialModule
    ],
    exports: [
        FlexLayoutModule,
        DemoMaterialModule
    ],
    providers: [],
})
export class SharedModule { }
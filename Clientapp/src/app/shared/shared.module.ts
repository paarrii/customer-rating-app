import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../layout/header/header.component';
import { LayoutComponent } from '../layout/layout.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    declarations: [
        LayoutComponent,
        HeaderComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        FlexLayoutModule
    ],
    exports: [
        FlexLayoutModule
    ],
    providers: [],
})
export class SharedModule { }
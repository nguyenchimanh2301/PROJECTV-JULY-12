import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MainRoutes } from './main.routes';
import { MainComponent } from './main.component';
import { IndexComponent } from './index/index.component';
import { ProductComponent } from './product/product.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoryComponent } from './category/category.component';
@NgModule({
    declarations:
     [MainComponent, IndexComponent, ProductComponent, CategoryComponent],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(MainRoutes),
        NgxPaginationModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class MainModule { }
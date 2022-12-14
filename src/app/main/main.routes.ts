import { CategoryComponent } from './category/category.component';
import { UnauthorizedComponent } from './../shared/components/unauthorized/unauthorized.component';
import { ProductComponent } from './product/product.component';
import { MainComponent } from './main.component';
import { Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { RoleGuard } from '../core/guards/role.guard';
import { Role } from '../entities/role';
// import { DashboardComponent } from './dashboard/dashboard.component';
export const MainRoutes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
      { path: '', component: IndexComponent },
      { path: 'unauthorized', component: UnauthorizedComponent },
      {
        path: 'user',
        loadChildren: () =>
          import('./user/user.module').then((m) => m.UserModule),
        canActivate: [RoleGuard],
        data: { roles: [Role.Admin] },
      },
      { path: 'product', component: ProductComponent },
      { path: 'category', component: CategoryComponent },
      
      // { path: 'homes', loadChildren: () => import('./homes/homes.module').then(m => m.HomesModule)},
      // { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule)},
    ]
  }
];

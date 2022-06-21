import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppGuard } from './app.guard';
import { AuthGuard } from './pages/auth/auth.guard';


const routes: Routes = [
  {path: "", redirectTo: "auth", pathMatch: "full"},
  {path: "customers", canActivate: [ AppGuard ], loadChildren: ()=> import("./pages/customers/customers.module").then(module => module.CustomersModule)},
  {path: "auth", canActivate: [ AuthGuard ], loadChildren: ()=> import("./pages/auth/auth.module").then(module => module.AuthModule)},
  {path: "**", redirectTo: "", pathMatch: "full"},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

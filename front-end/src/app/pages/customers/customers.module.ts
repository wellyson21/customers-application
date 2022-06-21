import { NgModule } from '@angular/core';
import { RegisterComponent } from './components/register/register.component';
import { CustomersComponent } from './customers.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/@shared/modules/shared.module';
import { NgIconsModule } from '@ng-icons/core';
import * as featherIcons from '@ng-icons/feather-icons';

@NgModule({
  declarations: [
    RegisterComponent,
    CustomersComponent
  ],
  imports: [
    SharedModule,
    NgIconsModule.withIcons( featherIcons ) , 
    RouterModule.forChild([
      { path: "", component: CustomersComponent },
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ]),
  ],
})
export class CustomersModule { }



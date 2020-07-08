import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { LoginComponent } from './login.component';
import { LoginpComponent } from './loginp/loginp.component';
const routes: Routes = [{
  path: '',
  component: LoginComponent,
  children: [
    {
      path: 'loginp',
      component: LoginpComponent,
    },
    {
      path: '',
      redirectTo: 'loginp',
      pathMatch: 'full',
    },
  ]
},


];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule

 {
}

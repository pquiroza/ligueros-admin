import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AdminComponent } from './admin.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
const routes: Routes = [{
  path: '',
  component: AdminComponent,
  children: [
    {
      path: 'adminhome',
      component: AdminhomeComponent,
    },
    {
      path: '',
      redirectTo: 'adminhome',
      pathMatch: 'full',
    },
  ]
},


];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {
}

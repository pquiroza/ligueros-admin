import { NgModule } from '@angular/core';
import { NbMenuModule,NbListModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';


@NgModule({
  imports: [
    LoginRoutingModule,
    NbMenuModule,
    NbListModule,
    ThemeModule
  ],
  declarations: [
    LoginComponent,
  ],
})
export class LoginModule {
}

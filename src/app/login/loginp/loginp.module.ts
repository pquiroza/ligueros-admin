import { NgModule } from '@angular/core';
import { NbCardModule, NbListModule,NbUserModule,NbIconModule,NbInputModule,NbButtonModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { LoginpComponent } from './loginp.component';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  imports: [
    NbCardModule,
    NbButtonModule,
    NbInputModule,
    ThemeModule,
    NbListModule,
    NbUserModule,
    NbEvaIconsModule,
    NbIconModule,
    Ng2SmartTableModule
    ],
  declarations: [
    LoginpComponent,
  ],
})
export class LoginpModule {



 }

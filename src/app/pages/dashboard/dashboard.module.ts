import { NgModule } from '@angular/core';
import { NbCardModule, NbListModule,NbUserModule,NbIconModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    NbListModule,
    NbUserModule,
    NbEvaIconsModule,
    NbIconModule,
    Ng2SmartTableModule
    ],
  declarations: [
    DashboardComponent,
  ],
})
export class DashboardModule { }

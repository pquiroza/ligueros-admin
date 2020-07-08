import { NgModule } from '@angular/core';
import { NbCardModule, NbListModule,NbUserModule,NbIconModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { AdminhomeComponent } from './adminhome.component';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { StatusCardComponent } from '../status-card/status-card.component';

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
    AdminhomeComponent,
    StatusCardComponent
  ],
})
export class AdminhomeModule { }

import { NgModule } from '@angular/core';
import { NbMenuModule,NbListModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { NuevocampeonatoModule } from './nuevocampeonato/nuevocampeonato.module'
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    NuevocampeonatoModule,
    NbListModule
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}

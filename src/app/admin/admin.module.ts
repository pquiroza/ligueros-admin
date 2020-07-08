import { NgModule } from '@angular/core';
import { NbMenuModule,NbListModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminhomeModule} from './adminhome/adminhome.module';


@NgModule({
  imports: [
    AdminRoutingModule,
    AdminhomeModule,
    ThemeModule,
    NbMenuModule,
    NbListModule
  ],
  declarations: [
    AdminComponent,
  ],
})
export class AdminModule {
}

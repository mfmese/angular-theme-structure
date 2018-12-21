import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientAuthGuard } from '../../core/guards/client-auth.guard';
import { ThemeModule } from 'src/app/core/theme/nebular.theme';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ClientRoutingModule,
    ThemeModule,
    SharedModule
  ],
  declarations: [ClientRoutingModule.components],
  providers: [ClientAuthGuard]
})
export class ClientModule { }

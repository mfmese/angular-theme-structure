
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './authentication-routing.module';
import { ThemeModule } from 'src/app/core/theme/nebular.theme';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    ThemeModule,
  ],
  declarations: [AuthRoutingModule.components ],
  providers: []
})
export class AuthenticationModule { }

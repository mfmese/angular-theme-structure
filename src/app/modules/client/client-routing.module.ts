import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientComponent } from './client.component';
import { ClientAuthGuard } from '../../core/guards/client-auth.guard';

const routes: Routes = [
  {
  path: '',
  component: ClientComponent,
  canActivate: [ClientAuthGuard],
  canActivateChild: [ClientAuthGuard],
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
      data: { title: 'Client Dashboard' }
    }
  ],
}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule {
  static components = [
    DashboardComponent,
    ClientComponent
  ];

}

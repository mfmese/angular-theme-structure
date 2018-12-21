import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules, NoPreloading, ExtraOptions } from '@angular/router';

import { PreloadModulesStrategy } from './core/strategies/preload-modules.strategy';

const app_routes: Routes = [
  { path: 'auth', loadChildren: './modules/authentication/authentication.module#AuthenticationModule' },
  { path: 'client', loadChildren: './modules/client/client.module#ClientModule' },
  { path: '', pathMatch: 'full', redirectTo: '/auth/signin' },
  { path: '**', redirectTo: '/auth/404' },
];

@NgModule({
  imports: [ RouterModule.forRoot(app_routes, { preloadingStrategy: PreloadAllModules }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

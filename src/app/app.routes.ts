import { provideRouter, RouterConfig }  from '@angular/router';

const routes: RouterConfig = [
  //{ path: '', redirectTo: '/home', pathMatch: 'full' }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];

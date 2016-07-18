import { bootstrap } from '@angular/platform-browser-dynamic';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import {HTTP_PROVIDERS} from '@angular/http';
//import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app/';
//import { APP_ROUTER_PROVIDERS } from './app/app.routes';

bootstrap(AppComponent, [
  disableDeprecatedForms(),
  provideForms(),
  HTTP_PROVIDERS

  //APP_ROUTER_PROVIDERS,
  //{ provide: LocationStrategy, useClass: HashLocationStrategy }
]);

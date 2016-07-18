import { Component } from '@angular/core';
import { HomeComponent } from './home/';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  directives: [HomeComponent]
})
export class AppComponent {}

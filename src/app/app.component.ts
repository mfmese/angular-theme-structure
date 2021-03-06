import { Component } from '@angular/core';
import { ToasterConfig } from 'angular2-toaster';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-ngrx-store-structure';

  public config: ToasterConfig = new ToasterConfig({
    animation: 'fade',
    positionClass: 'toast-top-full-width',
    showCloseButton: true,
    timeout: 8000
  });

}

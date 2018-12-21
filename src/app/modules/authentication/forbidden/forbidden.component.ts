import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../store/authentication/services/authentication.service';
import { Router } from '@angular/router';
import { appSettings } from 'src/app/config/app-settings.config';

@Component({
  selector: 'app-forbidden',
  templateUrl: './forbidden.component.html',
  styleUrls: ['./forbidden.component.css']
})
export class ForbiddenComponent implements OnInit {

  appSettings = appSettings;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
  ) { }

  ngOnInit() {
  }
  
  goToHome() {
    const userType = this.authenticationService.getUserType();
    if ( !userType ) {
      this.router.navigate(['/auth/signin']);
    } else if (userType === 'client') {
      this.router.navigate(['/client/dashboard']);
    }
  }
}

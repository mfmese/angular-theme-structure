import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthenticationService } from '../../../store/authentication/services/authentication.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToasterService } from 'angular2-toaster';
import 'style-loader!angular2-toaster/toaster.css';
import { appSettings } from '../../../config/app-settings.config';
import { appToaster } from '../../../config/app-toaster.config';

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signInForm: FormGroup;
  isSubmit: boolean ;
  EMAIL_REGEX = "[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*";
  hide: boolean;
  returnUrl: string;
  appSettings: any;
  constructor( private router: Router,
    private http: HttpClient,
    private route: ActivatedRoute,
    private toasterService: ToasterService,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.appSettings = appSettings;
    this.authenticationService.logout();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || null;
    this.hide = true;
    this.signInForm = new FormGroup({
      'email': new FormControl('', [
        Validators.required,
        Validators.maxLength(250),
        Validators.pattern(this.EMAIL_REGEX)
      ]),
      'password': new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(16),
      ]),
      'remember': new FormControl(),
    });
  }
  get email() { return this.signInForm.get('email'); }
  get password() { return this.signInForm.get('password'); }
  get remember()   { return this.signInForm.get('remember'); }

  onSubmit(): boolean {

    this.isSubmit = true;
    if (this.signInForm.invalid) {
      return false;
    } else {
      this.authenticationService.signin(this.signInForm.value)
      .subscribe((res) => {
        if (res.status === 'success') {
          this.toasterService.pop('success', appToaster.successHead, appToaster.signinSucess);

          if ( this.returnUrl === null &&  res.role === 'client' ) {
            this.returnUrl = '/client/dashboard';
          }

          this.router.navigate([this.returnUrl]);
          return true;
        }
      }
    );

    }
  }

}

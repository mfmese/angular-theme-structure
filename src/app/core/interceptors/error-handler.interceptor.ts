import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { HttpStatusCode } from './../../config/http-status-codes.config';

import { LoggerService } from '../services/logger.service';
import { environment } from '../../../environments/environment';
import { ToasterService } from 'angular2-toaster';
import { appToaster } from '../../config/app-toaster.config';

/**
 * Adds a default error handler to all requests.
 */
@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {
constructor(
    private logger: LoggerService,
    private toasterService: ToasterService,
    private router: Router
) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(error => this.errorHandler(error)));
  }

  // Customize the default error handler here if needed
  private errorHandler(response: HttpEvent<any>): Observable<HttpEvent<any>> {
    if (!environment.production) {
      // Do something with the error
      this.logger.logError('Request error ' + JSON.stringify(response));
    }

    // console.error(error);
    const httpErrorCode = response['status'];
    switch (httpErrorCode) {
      case HttpStatusCode.UNAUTHORIZED:
          this.router.navigateByUrl('/auth/login');
          break;
      case HttpStatusCode.FORBIDDEN:
          this.router.navigateByUrl('/auth/403');
          break;
      // case HttpStatusCode.BAD_REQUEST:
      //    this.showError(error.message);
      //     break;
      default:
      this.toasterService.pop('error', appToaster.errorHead, response['message']);
    }


    throw response;
  }

}


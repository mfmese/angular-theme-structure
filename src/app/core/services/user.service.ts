import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FortgotPassword } from 'src/app/shared/models/forgot-password.model';
import { ResetPassword } from 'src/app/shared/models/reset.model';
import { Attachments } from 'src/app/shared/models/attachments.model';
import { User } from 'src/app/shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  forgotPassword(fotgotData: FortgotPassword): Observable<any> {
    const href = `${ environment.fotgotPassword }`;
    return this.http.post<any>(href, fotgotData);
}


resetPassword(resetData: ResetPassword): Observable<any> {
  const href = `${ environment.resetPassword }`;
  return this.http.post<any>(href, resetData);
}

deleteAttachment(attachment: Attachments): Observable<any> {
  const href = `${ environment.deleteAttachment }`;
  return this.http.post<any>(href, attachment);
}

clientSignup(clientData: User): Observable<any> {
  const href = `${ environment.clientSignup }`;
  return this.http.post<any>(href, clientData);
}
}

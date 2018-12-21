import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap, debounce } from 'rxjs/operators';
import { of as observableOf } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { Signin } from 'src/app/shared/models/signin.model';

const credentialsKey = 'currentUser';

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient) {
    }

    signin(signinData: Signin): Observable<any> {
        const href = `${ environment.signin }`;
        return this.http.post<any>(href, signinData).pipe(
            tap(
                function (data) {
                    if (data.status === 'success') {
                        const storage = signinData.remember ? localStorage : sessionStorage;
                        storage.setItem(credentialsKey, JSON.stringify(data));
                    }
                    return data;
                }
            )
        );
    }

    logout(): Observable<boolean> {
        sessionStorage.removeItem(credentialsKey);
        localStorage.removeItem(credentialsKey);
        return observableOf(true);
    }

    getUserInfo(): Observable<any> {
        const savedCredentials = this.getUser();
        return observableOf(savedCredentials);
    }

    isSignin() {
        if (localStorage.getItem(credentialsKey) || sessionStorage.getItem(credentialsKey)) {
            return true;
        }
        return false;

    }

    getToken() {
        const savedCredentials = this.getUser();
        return savedCredentials && savedCredentials['token'];
    }

    getUserRole(): Observable<any> {
        const savedCredentials =  this.getUser();
        return observableOf(savedCredentials['role']);
    }

    getUserType() {
        const savedCredentials =  this.getUser();
        if ( this.isSignin() ) {
            return savedCredentials['role'];
        } else {
            return false;
        }


    }

    private getUser() {
        const savedCredentials = sessionStorage.getItem(credentialsKey) || localStorage.getItem(credentialsKey);
         return JSON.parse( savedCredentials );
    }

}

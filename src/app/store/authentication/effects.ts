import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AuthenticationService } from "./services/authentication.service";
import { Observable, of as observableOf, of } from "rxjs";
import * as actions from "./actions";
import { switchMap, map, catchError } from "rxjs/operators";
import { Action } from "@ngrx/store";
import { Signin } from "src/app/shared/models/signin.model";

@Injectable()
export class AuthenticationStoreEffects {

    constructor(private authenticationService: AuthenticationService, private actions$: Actions) { }

    @Effect()
    signInEffect =
        this.actions$
            .ofType<actions.SignInRequestAction>(actions.Types.SIGNIN_REQUEST)
            .pipe(
                switchMap((action) => {
                    return this.authenticationService.signin(action.payload)
                        .pipe(
                            map((signin: Signin) => new actions.SignInSuccessAction(signin)),
                            catchError(err => of(new actions.SignInFailureAction(err.message)))
                        );
                })
            );

}
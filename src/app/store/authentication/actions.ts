import { Action } from "@ngrx/store";
import { Signin } from "src/app/shared/models/signin.model";

export enum Types{
    SIGNIN_REQUEST = '[SIGNIN] SIGNIN_REQUEST',
    SIGNIN_SUCCESS = '[SIGNIN] SIGNIN_SUCCESS',
    SIGNIN_FAILURE = '[SIGNIN] SIGNIN_FAILURE',
}

export class SignInRequestAction implements Action {
    readonly type = Types.SIGNIN_REQUEST;
    constructor(public payload: Signin ) {}
}

export class SignInSuccessAction implements Action {
    readonly type = Types.SIGNIN_SUCCESS;
    constructor(public payload:  Signin ) {}
}

export class SignInFailureAction implements Action {
    readonly type = Types.SIGNIN_FAILURE;
    constructor(public payload: { error: string }) {}
}
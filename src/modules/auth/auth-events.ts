import { createEvent } from '@cobuildlab/react-simple-state';
import { Response, ResponseError, ResponseSuccess } from '@src/shared/types/type';
import { AccessAuthProps, ResponseSignInProps } from './auth-types';

export const signInEvent = createEvent<Response<{ dataObject: ResponseSignInProps }>>();
export const signInEventError = createEvent<ResponseError>();

export const accessAuthEvent = createEvent<Response<{ dataObject: AccessAuthProps }>>();
export const accessAuthEventError = createEvent<ResponseError>();

export const registerUserEvent = createEvent<ResponseSuccess>();
export const registerUserEventError = createEvent<ResponseError>();
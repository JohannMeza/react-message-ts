import { createAction } from '@cobuildlab/react-simple-state';
import { accessAuthEvent, accessAuthEventError, registerUserEvent, registerUserEventError, signInEvent, signInEventError } from './auth-events';
import { axiosService } from '@src/shared/service/axios';
import { AccessAuthProps, FormRegisterProps, ResponseSignInProps, SignInTypes } from './auth-types';
import { AxiosResponse } from 'axios';
import { Response, ResponseSuccess } from '@src/shared/types/type';
import { APP_AUTH_PATH } from '@src/shared/constant/paths';

export const signInAction = createAction(
  signInEvent,
  signInEventError,
  async (data: SignInTypes): Promise<Response<{ dataObject: ResponseSignInProps }>> => {
    try {
      const resp = await axiosService<
        SignInTypes,
        AxiosResponse<Response<{ dataObject: ResponseSignInProps }>>
      >({
        method: 'POST',
        url: APP_AUTH_PATH.SIGN_IN,
        data: {
          username: data.username,
          password: data.password
        }
      });

      return resp.data;
    } catch (error) {
      const message = `Error ${error}`;
      console.error(message);
      throw error;
    }
  }
);

export const registerUserAction = createAction(
  registerUserEvent,
  registerUserEventError,
  async (data: FormRegisterProps): Promise<ResponseSuccess> => {
    try {
      const resp = await axiosService<
        ResponseSuccess,
        AxiosResponse<ResponseSuccess>
      >({
        method: 'POST',
        url: APP_AUTH_PATH.REGISTER,
        data
      });

      return resp.data;
    } catch (error) {
      const message = `Error ${error}`;
      console.error(message);
      throw error;
    }
  }
);

export const fetchAccessAuth = createAction(
  accessAuthEvent,
  accessAuthEventError,
  async (): Promise<Response<{ dataObject: AccessAuthProps }>> => {
    try {
      const resp = await axiosService<
        Response<{ dataObject: AccessAuthProps }>,
        AxiosResponse<Response<{ dataObject: AccessAuthProps }>>
      >({
        method: 'POST',
        url: APP_AUTH_PATH.ACCESS,
      });
      return resp.data;
    } catch (error) {
      const message = `Error ${error}`;
      console.error(message);
      throw error;
    }
  }
);
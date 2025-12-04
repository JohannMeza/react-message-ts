import { createAction } from '@cobuildlab/react-simple-state';
import { acceptInvitationEvent, acceptInvitationEventError, listInvitationsEvent, listInvitationsEventError, rejectInvitationEvent, rejectInvitationEventError } from './invitation-events';
import { Response, ResponseSuccess } from '@src/shared/types/type';
import { axiosService } from '@src/shared/service/axios';
import { AxiosResponse } from 'axios';
import { APP_REQUEST_PATH } from '@src/shared/constant/paths';
import { InvitationProps } from './invitation-types';

export const acceptInvitationAction = createAction(
  acceptInvitationEvent,
  acceptInvitationEventError,
  async(idRequest: number, idUser: number): Promise<ResponseSuccess> => {
    try {
      const resp = await axiosService<
        ResponseSuccess,
        AxiosResponse<ResponseSuccess>
      >({
        method: 'PUT',
        url: APP_REQUEST_PATH.ACCEPT,
        data: {
          idRequest,
          idUser
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

export const rejectInvitationAction = createAction(
  rejectInvitationEvent,
  rejectInvitationEventError,
  async(idRequest: number, idUser: number): Promise<ResponseSuccess> => {
    try {
      const resp = await axiosService<
        ResponseSuccess,
        AxiosResponse<ResponseSuccess>
      >({
        method: 'PUT',
        url: APP_REQUEST_PATH.REJECT,
        data: {
          idRequest,
          idUser
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

export const listInvitationsAction = createAction(
  listInvitationsEvent,
  listInvitationsEventError,
  async(idUser: number): Promise<InvitationProps[]> => {
    try {
      const resp = await axiosService<
        Response<{ dataList: InvitationProps[] }>,
        AxiosResponse<Response<{ dataList: InvitationProps[] }>>
      >({
        method: 'POST',
        url: APP_REQUEST_PATH.LIST,
        data: {
          idUser: idUser
        }
      });

      return resp.data.dataList;
    } catch (error) {
      const message = `Error ${error}`;
      console.error(message);
      throw error;
    }
  }
);
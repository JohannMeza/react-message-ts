import { createAction } from '@cobuildlab/react-simple-state';
import { blockedContactEvent, blockedContactEventError, listContactLockedEvent, listContactLockedEventError, listContactNotLockedEvent, listContactNotLockedEventError, unblockedContactEvent, unblockedContactEventError } from './locked-events';
import { Response, ResponseSuccess } from '@src/shared/types/type';
import { axiosService } from '@src/shared/service/axios';
import { AxiosResponse } from 'axios';
import { APP_CONTACT_PATH } from '@src/shared/constant/paths';
import { ContactsViewLockedProps } from './locked-types';
import { ContactStates } from '@src/modules/dashboard/dashboard-types';

export const blockedContactAction = createAction(
  blockedContactEvent,
  blockedContactEventError,
  async (idContact: number): Promise<ResponseSuccess> => {
    try {
      const response = await axiosService<
        ResponseSuccess,
        AxiosResponse<ResponseSuccess>
      >({
        method: 'PUT',
        url: APP_CONTACT_PATH.BLOCKED,
        data: {
          idContact
        }
      });

      return response.data;
    } catch (error) {
      const message = `Error ${error}`;
      console.error(message);
      throw error;
    }
  }
);

export const unblockContactAction = createAction(
  unblockedContactEvent,
  unblockedContactEventError,
  async (idContact: number): Promise<ResponseSuccess> => {
    try {
      const response = await axiosService<
        ResponseSuccess,
        AxiosResponse<ResponseSuccess>
      >({
        method: 'PUT',
        url: APP_CONTACT_PATH.UNBLOCKED,
        data: {
          idContact
        }
      });

      return response.data;
    } catch (error) {
      const message = `Error ${error}`;
      console.error(message);
      throw error;
    }
  }
);

export const listContactLockedAction = createAction(
  listContactLockedEvent,
  listContactLockedEventError,
  async (idUser: number, state: ContactStates): Promise<ContactsViewLockedProps[]> => {
    try {
      const response = await axiosService<
        Response<{ dataList: ContactsViewLockedProps[] }>,
        AxiosResponse<Response<{ dataList: ContactsViewLockedProps[] }>>
      >({
        method: 'POST',
        url: APP_CONTACT_PATH.STATE,
        data: {
          idUser,
          idContactState: state
        }
      });

      return response.data.dataList;
    } catch (error) {
      const message = `Error ${error}`;
      console.error(message);
      throw error;
    }
  }
);

export const listContactsNotLockedAction = createAction(
  listContactNotLockedEvent,
  listContactNotLockedEventError,
  async (idUser: number, state: ContactStates): Promise<ContactsViewLockedProps[]> => {
    try {
      const resp = await axiosService<
        Response<{ dataList: ContactsViewLockedProps[] }>,
        AxiosResponse<Response<{ dataList: ContactsViewLockedProps[] }>>
      >({
        method: 'POST',
        url: APP_CONTACT_PATH.STATE,
        data: {
          idUser,
          idContactState: state
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
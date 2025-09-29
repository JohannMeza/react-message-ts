import { createAction } from '@cobuildlab/react-simple-state';
import { listContactsAddedEvent, listContactsAddedEventError, updateStateMessagesEvent, updateStateMessagesEventError } from './contact-events';
import { axiosService } from '@src/shared/service/axios';
import { Response, ResponseSuccess } from '@src/shared/types/type';
import { ContactProps } from './contact-types';
import { AxiosResponse } from 'axios';
import { APP_CONTACT_PATH, APP_MESSAGES_PATH } from '@src/shared/constant/paths';

export const listContactsAddedAction = createAction(
  listContactsAddedEvent,
  listContactsAddedEventError,
  async (idUser: number): Promise<ContactProps[]> => {
    try {
      const resp = await axiosService<
        Response<{ dataList: ContactProps[] }>,
        AxiosResponse<Response<{ dataList: ContactProps[] }>>
      >({
        method: 'GET',
        url: `${APP_CONTACT_PATH.ALL}/${idUser}`,
      });

      return resp.data.dataList;
    } catch (error) {
      const message = `Error ${error}`;
      console.error(message);
      throw error;
    }
  }
);


export const updateStateMessages = createAction(
  updateStateMessagesEvent,
  updateStateMessagesEventError,
  async (idContactMe: number, idContactYour: number): Promise<ResponseSuccess> => {
    try {
      const resp = await axiosService<
      ResponseSuccess,
      AxiosResponse<ResponseSuccess>
      >({
        method: 'PUT',
        url: `${APP_MESSAGES_PATH.STATE_READ}`,
        data: {
          idContactMe,
          idContactYour
        }
      });
      return resp.data.dataObject;
    } catch (error) {
      const message = `Error ${error}`;
      console.error(message);
      throw error;
    }
  }
);
import { createAction } from '@cobuildlab/react-simple-state';
import { responseFriendRequest, responseFriendRequestError, sendMessageContactEvent, sendMessageContactEventError, updateMessageContactEvent, updateMessageContactEventError } from './messaging-events';
import { axiosService } from '@src/shared/service/axios';
import { ResponseSuccess } from '@src/shared/types/type';
import { AxiosResponse } from 'axios';
import { RequestFriendProps } from './messaging-types';
import { APP_MESSAGES_PATH, APP_REQUEST_PATH } from '@src/shared/constant/paths';
import { MessageTypesEnum } from '@src/shared/types/base/message/message-types';

export const sendFriendRequest = createAction(
  responseFriendRequest,
  responseFriendRequestError,
  async(data: RequestFriendProps): Promise<ResponseSuccess> => {
    try {
      const resp = await axiosService<
        ResponseSuccess,
        AxiosResponse<ResponseSuccess>
      >({
        method: 'POST',
        url: APP_REQUEST_PATH.NEW,
        data: {
          idUserSend: data.idUserSend,
          idUserReceived: data.idUserReceived,
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

interface SendMessageProps {
  idTypeMessage: MessageTypesEnum,
  idContactMe: number,
  idContactYour: number,
  message: string,
  description: string
}

export const sendMessageToContact = createAction(
  sendMessageContactEvent,
  sendMessageContactEventError,
  async(props: SendMessageProps): Promise<ResponseSuccess> => {
    try {
      const response = await axiosService<
        ResponseSuccess,
        AxiosResponse<ResponseSuccess>
      >({
        method: 'POST',
        url: APP_MESSAGES_PATH.SEND,
        data: props
      });

      return response.data;
    } catch (error) {
      const message = `Error ${error}`;
      console.error(message);
      throw error;
    }
  }
);

interface UpdateMessageProps {
  batchMessage: string
  message: string,
}

export const updateMessageToContact = createAction(
  updateMessageContactEvent,
  updateMessageContactEventError,
  async (updateMessageProps: UpdateMessageProps) => {
    try {
      const response = await axiosService<
        ResponseSuccess,
        AxiosResponse<ResponseSuccess>
      >({
        method: 'POST',
        url: APP_MESSAGES_PATH.UPDATE,
        data: updateMessageProps
      });

      return response.data;
    } catch (error) {
      const message = `Error ${error}`;
      console.error(message);
      throw error;
    }
  }
);
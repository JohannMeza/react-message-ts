import { createAction } from '@cobuildlab/react-simple-state';
import {
  messagingOpenEvent,
  messagingOpenEventError,
} from './menu/chat/chat-events';
import { contactDataEvent, contactDataEventError, groupDataEvent, groupDataEventError } from './dashboard-events';
import { axiosService } from '@src/shared/service/axios';
import { Response } from '@src/shared/types/type';
import { AxiosResponse } from 'axios';
import { APP_CONTACT_PATH, APP_GROUP_PATH, APP_MESSAGES_PATH, APP_USER_PATH } from '@src/shared/constant/paths';
import { ContactProps, GroupProps } from '@src/shared/types/base/contact/contact-types';
import { MessagesType } from './messaging/messaging-types';

export const fetchMessagingUser = createAction(
  messagingOpenEvent,
  messagingOpenEventError,
  async (idContact: number): Promise<MessagesType[]> => {
    try {
      if (!idContact) return [];

      const response = await axiosService<
        Response<{ dataList: MessagesType[] }>,
        AxiosResponse<Response<{ dataList: MessagesType[] }>>
      >({
        method: 'POST',
        url: APP_MESSAGES_PATH.CONTACT,
        data: {
          idContact
        }
      });

      return response.data.dataList;
    } catch (error) {
      const message = `Error ${error}`;
      console.error(message);
      throw error;
    }
  },
);

export const fetchMessagingGroup = createAction(
  messagingOpenEvent,
  messagingOpenEventError,
  async (idGroupMember: number): Promise<MessagesType[]> => {
    try {
      if (!idGroupMember) return [];

      const response = await axiosService<
        Response<{ dataList: MessagesType[] }>,
        AxiosResponse<Response<{ dataList: MessagesType[] }>>
      >({
        method: 'POST',
        url: APP_MESSAGES_PATH.GROUP,
        data: {
          idGroupMember
        }
      });
      return response.data.dataList;
    } catch (error) {
      const message = `Error ${error}`;
      console.error(message);
      throw error;
    }
  },
);

export const fetchUserDataNotAdded = createAction(
  contactDataEvent,
  contactDataEventError,
  async (idUser: number, idUserContact: number): Promise<ContactProps> => {
    try {
      const resp = await axiosService<
        Response<{ dataObject: ContactProps }>,
        AxiosResponse<Response<{ dataObject: ContactProps }>>
      >({
        method: 'POST',
        url: APP_USER_PATH.FIND_ONE,
        data: {
          idUser: idUser,
          idUserContact: idUserContact
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

export const fetchContactData = createAction(
  contactDataEvent,
  contactDataEventError,
  async (idContact: number): Promise<ContactProps> => {
    try {
      const resp = await axiosService<
      Response<{ dataObject: ContactProps }>,
      AxiosResponse<Response<{ dataObject: ContactProps }>>
      >({
        method: 'POST',
        url: `${APP_CONTACT_PATH.ONE}/${idContact}`,
      });

      return resp.data.dataObject;
    } catch (error) {
      const message = `Error ${error}`;
      console.error(message);
      throw error;
    }
  }
);

export const fetchGroupData = createAction(
  groupDataEvent,
  groupDataEventError,
  async (idGroup: number, idUser: number): Promise<GroupProps> => {
    try {
      const resp = await axiosService<
        Response<{ dataObject: GroupProps }>,
        AxiosResponse<Response<{ dataObject: GroupProps }>>
      >({
        method: 'POST',
        url: `${APP_GROUP_PATH.FIND_ONE}`,
        data: { idGroup, idUser }
      });

      return resp.data.dataObject;
    } catch (error) {
      const message = `Error ${error}`;
      console.error(message);
      throw error;
    }
  }
);
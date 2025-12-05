import { createAction } from '@cobuildlab/react-simple-state';
import { fetchProfileMessagingEvent, fetchProfileMessagingEventError } from './profile-user-events';
import { FetchProfileMessaging, ProfileUser } from './profile-user-types';
import { Response } from '@src/shared/types/type';
import { AxiosResponse } from 'axios';
import { axiosService } from '@src/shared/service/axios';
import { APP_GROUP_PATH, APP_PROFILE_USER_PATH } from '@src/shared/constant/paths';

export const fetchProfileMessaging = createAction(
  fetchProfileMessagingEvent,
  fetchProfileMessagingEventError,
  async (data: FetchProfileMessaging): Promise<ProfileUser> => {
    try {
      let path = '';

      if (data.typeMessaging === 'GROUP') {
        path = APP_GROUP_PATH.PROFILE;
      } else if (data.typeMessaging === 'CONTACT') {
        path = APP_PROFILE_USER_PATH.PROFILE;
      }

      const response = await axiosService<
        Response<{ dataObject: ProfileUser }>,
        AxiosResponse<Response<{ dataObject: ProfileUser }>>
      >({
        method: 'POST',
        url: path,
        data: data
      });

      return { ...response.data.dataObject, typeMessaging: data.typeMessaging };
    } catch (error) {
      const message = `Error ${error}`;
      console.error(message);
      throw error;
    }
  }
);
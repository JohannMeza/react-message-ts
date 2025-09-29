import { createAction } from '@cobuildlab/react-simple-state';
import { profileEvent, profileEventError, profileUpdateEvent, profileUpdateEventError } from './profile-events';
import { Response, ResponseSuccess } from '@src/shared/types/type';
import { FormProfileProps, ProfileProps } from './profile-types';
import { axiosService } from '@src/shared/service/axios';
import { AxiosResponse } from 'axios';
import { APP_PROFILE_PATH } from '@src/shared/constant/paths';

export const fetchProfileMe = createAction(
  profileEvent,
  profileEventError,
  async (idUser: number): Promise<ProfileProps> => {
    try {
      const resp = await axiosService<
        Response<{ dataObject: ProfileProps }>,
        AxiosResponse<Response<{ dataObject: ProfileProps }>>
      >({
        method: 'GET',
        url: `${APP_PROFILE_PATH.ME}/${idUser}`,
      });
      return resp.data.dataObject;
    } catch (error) {
      const message = `Error ${error}`;
      console.error(message);
      throw error;
    }
  }
);

export const updateProfileMe = createAction(
  profileUpdateEvent,
  profileUpdateEventError,
  async (data: FormProfileProps): Promise<ResponseSuccess> => {
    try {
      const resp = await axiosService<
        ResponseSuccess,
        AxiosResponse<ResponseSuccess>
      >({
        method: 'PUT',
        url: APP_PROFILE_PATH.UPDATE,
        data: data
      });
      return resp.data;
    } catch (error) {
      const message = `Error ${error}`;
      console.error(message);
      throw error;
    }
  }
);
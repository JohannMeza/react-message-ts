import { createAction } from '@cobuildlab/react-simple-state';
import { searchUsersEvent, searchUsersEventError } from './search-events';
import { Response } from '@src/shared/types/type';
import { FormSearchUsersProps, SearchUsersProps } from './search-types';
import { axiosService } from '@src/shared/service/axios';
import { AxiosResponse } from 'axios';
import { APP_USER_PATH } from '@src/shared/constant/paths';

export const fetchUsersAll = createAction(
  searchUsersEvent,
  searchUsersEventError,
  async (data: FormSearchUsersProps): Promise<Response<{ dataList: SearchUsersProps[] }>> => {
    try {
      const users = await axiosService<
        Response<{ dataList: SearchUsersProps[] }>,
        AxiosResponse<Response<{ dataList: SearchUsersProps[] }>>
      >({
        method: 'POST',
        url: APP_USER_PATH.ALL,
        data: {
          username: data.username,
          idUser: data.idUser
        }
      });
      
      return users.data;
    } catch (error) {
      const message = `Error ${error}`;
      console.error(message);
      throw error;
    }
  }
);
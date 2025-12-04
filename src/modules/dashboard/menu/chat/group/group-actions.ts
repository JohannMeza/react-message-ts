import { createAction } from '@cobuildlab/react-simple-state';
import { listGroupsAddedEvent, listGroupsAddedEventError } from './group-events';
import { GroupProps } from './group-types';
import { axiosService } from '@src/shared/service/axios';
import { AxiosResponse } from 'axios';
import { APP_GROUP_PATH } from '@src/shared/constant/paths';
import { Response } from '@src/shared/types/type';

export const listGroupsAddedAction = createAction(
  listGroupsAddedEvent,
  listGroupsAddedEventError,
  async (idUser: number): Promise<GroupProps[]> => {
    try {
      const resp = await axiosService<
        Response<{ dataList: GroupProps[] }>,
        AxiosResponse<Response<{ dataList: GroupProps[] }>>
      >({
        method: 'GET',
        url: `${APP_GROUP_PATH.ALL}/${idUser}`,
      });

      return resp.data.dataList;
    } catch (error) {
      const message = `Error ${error}`;
      console.error(message);
      throw error;
    }
  }
);
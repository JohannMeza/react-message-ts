import { createAction } from '@cobuildlab/react-simple-state';
import { memberContactsAddedEvent, memberContactsAddedEventError } from './member-events';
import { MemberContactsProps } from './member-types';
import { axiosService } from '@src/shared/service/axios';
import { Response } from '@src/shared/types/type';
import { AxiosResponse } from 'axios';
import { APP_CONTACT_PATH } from '@src/shared/constant/paths';

export const ListContactsAddedGroupAction = createAction(
  memberContactsAddedEvent,
  memberContactsAddedEventError,
  async (idUser: number): Promise<MemberContactsProps[]> => {
    try {
      const resp = await axiosService<
        Response<{ dataList: MemberContactsProps[] }>,
        AxiosResponse<Response<{ dataList: MemberContactsProps[] }>>
      >({
        method: 'GET',
        url: `${APP_CONTACT_PATH.ALL_CONTACTS}/${idUser}`,
      });
      
      return resp.data.dataList;
    } catch (error) {
      const message = `Error ${error}`;
      console.error(message);
      throw error;
    }
  }
);
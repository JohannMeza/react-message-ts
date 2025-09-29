import { createAction } from '@cobuildlab/react-simple-state';
import { listSettingsEvent, listSettingsEventError, updateUserSettingEvent, updateUserSettingEventError } from './setting-events';
import { ItemSetting } from './setting-types';
import { axiosService } from '@src/shared/service/axios';
import { Response, ResponseSuccess } from '@src/shared/types/type';
import { AxiosResponse } from 'axios';
import { APP_SETTING_PATH } from '@src/shared/constant/paths';

export const listSettingActions = createAction(
  listSettingsEvent,
  listSettingsEventError,
  async (idUser): Promise<ItemSetting[]> => {
    try {
      const settings = await axiosService<
        Response<{ dataList: ItemSetting[] }>,
        AxiosResponse<Response<{ dataList: ItemSetting[] }>>
      >({
        method: 'POST',
        url: APP_SETTING_PATH.LIST,
        data: { idUser }
      });
      
      return settings.data.dataList;
    } catch (error) {
      console.error(`Error ${error}`);
      throw error;
    }
  }  
);

export const updateUserSettingActions = createAction(
  updateUserSettingEvent,
  updateUserSettingEventError,
  async (idConfigurationUser: number, value): Promise<ResponseSuccess> => {
    try {
      const response = await axiosService<
        Response<ResponseSuccess>,
        AxiosResponse<ResponseSuccess>
      >({
        method: 'POST',
        url: APP_SETTING_PATH.UPDATE,
        data: { idConfigurationUser, value }
      });

      return response.data;
    } catch (error) {
      console.error(`Error ${error}`);
      throw error;
    }
  }
);
import { createAction } from '@cobuildlab/react-simple-state';
import { groupUploadImageEvent, groupUploadImageEventError, infoNewGroupEvent, infoNewGroupEventError } from './information-events';
import { CreateNewGroupProps, UploadGroupProps } from './information-types';
import { axiosService } from '@src/shared/service/axios';
import { Response } from '@src/shared/types/type';
import { AxiosResponse } from 'axios';
import { APP_GROUP_PATH } from '@src/shared/constant/paths';

export const createGroupAction = createAction(
  infoNewGroupEvent,
  infoNewGroupEventError,
  async (data: CreateNewGroupProps): Promise<Response<{ dataObject: { idGroup: number } }>> => {
    try {
      const resp = await axiosService<
        Response<{ dataObject: { idGroup: number } }>,
        AxiosResponse<Response<{ dataObject: { idGroup: number } }>>
      >({
        method: 'POST',
        url: APP_GROUP_PATH.CREATE,
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

export const uploadImageNewGroup = createAction(
  groupUploadImageEvent,
  groupUploadImageEventError,
  async (file: File, idUser: number): Promise<UploadGroupProps> => {
    try {
      const formData = new FormData();
      formData.append('image', file);

      const resp = await axiosService<
        Response<{ dataObject: UploadGroupProps }>,
        AxiosResponse<Response<{ dataObject: UploadGroupProps }>>
      >({
        method: 'POST',
        url: `${APP_GROUP_PATH.UPLOAD}/${idUser}`,
        data: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
          'File-Type': 'image',
        },
      });

      return resp.data.dataObject;
    } catch (error) {
      const message = `Error ${error}`;
      console.error(message);
      throw error;
    }
  }
);
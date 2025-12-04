import { createEvent } from '@cobuildlab/react-simple-state';
import { Response, ResponseError } from '@src/shared/types/type';
import { FormInfoNewGroupProps, UploadGroupProps } from './information-types';

export const infoNewGroupEvent = createEvent<Response<{ dataObject: { idGroup: number } }>>();
export const infoNewGroupEventError = createEvent<ResponseError>();

export const formInfomationGroupEvent = createEvent<FormInfoNewGroupProps>();
export const formInfomationGroupEventError = createEvent<FormInfoNewGroupProps>();

export const groupUploadImageEvent = createEvent<UploadGroupProps>();
export const groupUploadImageEventError = createEvent<ResponseError>();
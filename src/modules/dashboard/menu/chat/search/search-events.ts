import { createEvent } from '@cobuildlab/react-simple-state';
import { SearchUsersProps } from './search-types';
import { Response, ResponseError } from '@src/shared/types/type';

export const searchUsersEvent = createEvent<Response<{ dataList: SearchUsersProps[] }>>();
export const searchUsersEventError = createEvent<ResponseError>();
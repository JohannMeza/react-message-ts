import { createEvent } from '@cobuildlab/react-simple-state';
import { GroupProps } from './group-types';
import { ResponseError } from '@src/shared/types/type';

export const listGroupsAddedEvent = createEvent<GroupProps[]>({ initialValue: [] });
export const listGroupsAddedEventError = createEvent<ResponseError>();
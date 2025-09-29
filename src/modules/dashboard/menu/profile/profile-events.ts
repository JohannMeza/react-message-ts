import { createEvent } from '@cobuildlab/react-simple-state';
import { ProfileProps } from './profile-types';
import { ResponseError, ResponseSuccess } from '@src/shared/types/type';

export const profileUpdateEvent = createEvent<ResponseSuccess>();
export const profileUpdateEventError = createEvent<ResponseError>();

export const profileEvent = createEvent<ProfileProps>();
export const profileEventError = createEvent<ResponseError>();
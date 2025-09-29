import { Event, createEvent } from '@cobuildlab/react-simple-state';
import { ActiveProfileUserEnum } from './messaging-types';
import { ResponseError, ResponseSuccess } from '@src/shared/types/type';

export const activeProfileUserViewEvent = createEvent({
  initialValue: { view: ActiveProfileUserEnum.NONE },
});
export const activeProfileUserViewEventError: Event<Error> = createEvent();

export const responseFriendRequest = createEvent<ResponseSuccess>();
export const responseFriendRequestError = createEvent<ResponseError>();

export const sendMessageContactEvent = createEvent<ResponseSuccess>();
export const sendMessageContactEventError = createEvent<ResponseError>();

export const updateMessageContactEvent = createEvent<ResponseSuccess>();
export const updateMessageContactEventError = createEvent<ResponseError>();
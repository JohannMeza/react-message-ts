import { Event, createEvent } from '@cobuildlab/react-simple-state';
import { ActiveProfileUserEnum, MessagingContainer, MessagingContainerProps } from './messaging-types';
import { ResponseError, ResponseSuccess } from '@src/shared/types/type';

export const messagingContainerActiveEvent = createEvent<MessagingContainerProps>({ initialValue: { typeMessagingContainer: MessagingContainer.NONE } });
export const messagingContainerActiveEventError = createEvent<Error>();

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

export const sendMessageGroupEvent = createEvent<ResponseSuccess>();
export const sendMessageGroupEventError = createEvent<ResponseError>();

export const updateMessageGroupEvent = createEvent<ResponseSuccess>();
export const updateMessageGroupEventError = createEvent<ResponseError>();
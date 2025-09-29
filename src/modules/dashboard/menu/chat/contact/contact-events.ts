import { createEvent } from '@cobuildlab/react-simple-state';
import { ResponseError, ResponseSuccess } from '@src/shared/types/type';
import { ContactProps } from './contact-types';

export const listContactsAddedEvent = createEvent<ContactProps[]>({ initialValue: [] });
export const listContactsAddedEventError = createEvent<ResponseError>();

export const updateStateMessagesEvent = createEvent<ResponseSuccess>();
export const updateStateMessagesEventError = createEvent<ResponseError>();
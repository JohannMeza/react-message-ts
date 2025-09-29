import { createEvent } from '@cobuildlab/react-simple-state';
import { ResponseError, ResponseSuccess } from '@src/shared/types/type';
import { ContactsViewLockedProps } from './locked-types';


export const blockedContactEvent = createEvent<ResponseSuccess>();
export const blockedContactEventError = createEvent<ResponseError>();

export const unblockedContactEvent = createEvent<ResponseSuccess>();
export const unblockedContactEventError = createEvent<ResponseError>();

export const listContactLockedEvent = createEvent<ContactsViewLockedProps[]>({ initialValue: [] });
export const listContactLockedEventError = createEvent<ResponseError>();

export const listContactNotLockedEvent = createEvent<ContactsViewLockedProps[]>({ initialValue: [] });
export const listContactNotLockedEventError = createEvent<ResponseError>();
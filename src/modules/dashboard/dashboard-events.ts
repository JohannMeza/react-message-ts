import { ResponseError } from '@src/shared/types/type';
import { createEvent } from '@cobuildlab/react-simple-state';
import { ContactProps } from '@src/shared/types/base/contact/contact-types';
import { UserDataProps } from './dashboard-types';

export const userDataEvent = createEvent<UserDataProps>();
export const userDataEventError = createEvent<ResponseError>();

export const contactDataEvent = createEvent<ContactProps>();
export const contactDataEventError = createEvent<ResponseError>();

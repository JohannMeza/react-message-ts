import { ResponseError } from '@src/shared/types/type';
import { createEvent } from '@cobuildlab/react-simple-state';
import { ContactProps, ContactStateType, GroupProps } from '@src/shared/types/base/contact/contact-types';
import { MessageStateEnum, UserDataProps } from './dashboard-types';

export const userDataEvent = createEvent<UserDataProps>();
export const userDataEventError = createEvent<ResponseError>();

export const contactDataEvent = createEvent<ContactProps>({ initialValue: {
  idContactMe: 0,
  idContactYour: 0,
  idUserContact: 0,
  name: '',
  pathImage: '',
  info: '',
  typeContact: MessageStateEnum.SENT,
  stateContact: ContactStateType.CONTACT
} });
export const contactDataEventError = createEvent<ResponseError>();

export const groupDataEvent = createEvent<GroupProps>({ initialValue: {
  idGroup: 0,
  idGroupMember: 0,
  name: '',
  pathImage: '',
  info: '',
  typeContact: MessageStateEnum.SENT,
  stateContact: ContactStateType.CONTACT
} });
export const groupDataEventError = createEvent<ResponseError>();

import { ContactStateType } from '@src/shared/types/base/contact/contact-types';
import { MessagesType } from './messaging/messaging-types';

export enum MessageStateEnum {
  SENT = 1,
  RECEIVED = 2,
  READ = 3,
  DELETED = 4,
}

export enum ContactStates {
  CONTACT = 1,
  BLOCKED = 2,
  DELETED = 3
}

export interface UserDataProps {
  idUser: number
  name: string
  pathImage: string
  info: string
  typeContact: MessageStateEnum
  stateContact: ContactStateType
  messages: MessagesType[]
}
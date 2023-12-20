import { MessageStateEnum } from '../dashboard-types';

export enum MessagesTypesEnum {
  NORMAL        = 'TYPE_1',
  INFO          = 'TYPE_2',
  LOCKED        = 'TYPE_3',
  NOTIFICATION  = 'TYPE_4',
  MEDIA         = 'TYPE_5',
  MEDIA_PREVIEW = 'TYPE_6',
  DOCUMENT      = 'TYPE_7',
  LINK          = 'TYPE_8',
}

export enum ActionsMessagingEnum {
  VIEW_PROFILE = 'view_profile',
  CLEAR_CHAT = 'clear_chat',
  DELETE_CHAT = 'delete_chat',
  CLOSE_CONTACT = 'close_contact',
  REPORT = 'report',
  LOCKED = 'locked',
}

export enum ActiveProfileUserEnum {
  NONE = '',
  PROFILE_USER = 'profile_user',
}

export interface MessagesType {
  id: string
  name: string
  message: string
  sendId: string
  receivedId: string
  createdAt: number
  state: MessageStateEnum
  typeMessage: MessagesTypesEnum
  isNewDay: boolean
  isEdit: boolean
}

export interface MessagingType {
  id: string | null
  messages: MessagesType[]
};
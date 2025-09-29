import { ContactStateType } from '@src/shared/types/base/contact/contact-types';
import { MessageStateEnum } from '../dashboard-types';
import { DocumentType } from './component/messages/message-types';
import { FC, PropsWithChildren } from 'react';

export enum MessagesTypesEnum {
  NORMAL = 'TYPE_1',
  INFO = 'TYPE_2',
  LOCKED = 'TYPE_3',
  NOTIFICATION = 'TYPE_4',
  MEDIA = 'TYPE_5',
  MEDIA_PREVIEW = 'TYPE_6',
  DOCUMENT = 'TYPE_7',
  LINK = 'TYPE_8',
}

export enum ActionsMessagingEnum {
  VIEW_PROFILE = 'view_profile',
  CLEAR_CHAT = 'clear_chat',
  DELETE_CHAT = 'delete_chat',
  CLOSE_CONTACT = 'close_contact',
  REPORT_CHAT = 'report',
  LOCKED_CHAT = 'locked',
}

export enum ActiveProfileUserEnum {
  NONE = '',
  PROFILE_USER = 'profile_user',
}

export enum MessagingContainer {
  UNKNOWN = 'UNKNOWN',
  CONTACT = 'CONTACT'
}

export interface MessagesType {
  idContactMessage: number;
  name: string;
  message: string;
  batchMessage: string
  idTypeComunication: number;
  sendDateTime: string;
  idContactMessageState: number;
  createdAt: number;
  state: MessageStateEnum;
  typeMessage: MessagesTypesEnum;
  isNewDay: boolean;
  isEdit: boolean;
  url: string;
  fileName: string;
  typeFile: DocumentType;
}

export interface MessagingType {
  id: string | null;
  messages: MessagesType[];
}

export interface RequestFriendProps {
  idUserSend: number
  idUserReceived: number
}

export interface BoxSendingProps extends SendMessageContactProps {
  stateContact: ContactStateType
}

export interface BoxUpdateProps {
  onUpdateMessage: (message: string, batchMessage: string) => void
  message: string
  batchMessage: string
}

export interface SectionSendMessageTypes {
  [ContactStateType.BLOCKED]: FC<PropsWithChildren>;
  [ContactStateType.CONTACT]: FC<SendMessageContactProps>;
  [ContactStateType.DELETED]: FC<PropsWithChildren>;
}

export interface SendMessageContactProps {
  onSendMessage: (message: string) => void
}
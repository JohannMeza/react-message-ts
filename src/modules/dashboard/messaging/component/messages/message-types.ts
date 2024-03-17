import { MessageStateEnum } from '@src/modules/dashboard/dashboard-types';
import { MessagesTypesEnum } from '../../messaging-types';
import { FC } from 'react';

export type DocumentType = 'doc' | 'pdf' | 'xlsx' | 'ppt';
export type MessageItemType = MessageNormalBoxType &
  MessageInfoBoxType &
  MessageLockedBoxType &
  MessageNotificationBoxType &
  MessageMediaBoxType &
  MessageMediaPreviewBoxType &
  MessageDocumentBoxType &
  MessageLinkBoxType;

export enum MessageIssendBy {
  'ME' = 'me',
  'GROUP_ME' = 'group_me',

  'OTHER' = 'other',
  'GROUP_OTHER' = 'group_other',
}

export interface MessageComponentProps {
  [MessagesTypesEnum.NORMAL]: FC<MessageNormalBoxType>;
  [MessagesTypesEnum.INFO]: FC<MessageInfoBoxType>;
  [MessagesTypesEnum.LOCKED]: FC<MessageLockedBoxType>;
  [MessagesTypesEnum.NOTIFICATION]: FC<MessageNotificationBoxType>;
  [MessagesTypesEnum.MEDIA]: FC<MessageMediaBoxType>;
  [MessagesTypesEnum.MEDIA_PREVIEW]: FC<MessageMediaPreviewBoxType>;
  [MessagesTypesEnum.DOCUMENT]: FC<MessageDocumentBoxType>;
  [MessagesTypesEnum.LINK]: FC<MessageLinkBoxType>;
}

export interface MessageNormalBoxType {
  typeMessage: MessagesTypesEnum;
  message: string;
  sendId: string;
  createdAt: number;
  receivedId: string;
  isEdit: boolean;
  state: MessageStateEnum;
  isNewDay: boolean;
}

export interface MessageInfoBoxType {
  typeMessage: MessagesTypesEnum;
  message: string;
}

export interface MessageLockedBoxType {
  typeMessage: MessagesTypesEnum;
  receivedId: string;
  sendId: string;
}

export interface MessageNotificationBoxType {
  typeMessage: MessagesTypesEnum;
  message: string;
}

export interface MessageMediaBoxType {
  typeMessage: MessagesTypesEnum;
  url: string;
  message: string;
  sendId: string;
  receivedId: string;
  createdAt: number;
  state: MessageStateEnum;
}

export interface MessageMediaPreviewBoxType {
  typeMessage: MessagesTypesEnum;
  url: string;
  message: string;
  sendId: string;
  receivedId: string;
  createdAt: number;
  state: MessageStateEnum;
}

export interface MessageDocumentBoxType {
  id: string;
  typeMessage: MessagesTypesEnum;
  fileName: string;
  message: string;
  sendId: string;
  receivedId: string;
  createdAt: number;
  isEdit: boolean;
  typeFile: DocumentType;
  state: MessageStateEnum;
}

export interface MessageLinkBoxType {
  typeMessage: MessagesTypesEnum;
  id: string;
  message: string;
  sendId: string;
  receivedId: string;
  createdAt: number;
  isEdit: boolean;
  state: MessageStateEnum;
  isNewDay: boolean;
}

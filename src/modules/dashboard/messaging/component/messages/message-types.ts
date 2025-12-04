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
  idContactMessage: number;
  name: string
  typeMessage: MessagesTypesEnum;
  message: string;
  batchMessage: string;
  idTypeComunication: number;
  sendDateTime: string;
  idContactMessageState: number;
  createdAt: number;
  isEdit: boolean;
  state: MessageStateEnum;
  isNewDay: boolean;
}

export interface MessageInfoBoxType {
  idContactMessage: number;
  typeMessage: MessagesTypesEnum;
  message: string;
  batchMessage: string;
}

export interface MessageLockedBoxType {
  idContactMessage: number;
  typeMessage: MessagesTypesEnum;
  idTypeComunication: number;
}

export interface MessageNotificationBoxType {
  idContactMessage: number;
  typeMessage: MessagesTypesEnum;
  message: string;
  batchMessage: string;
}

export interface MessageMediaBoxType {
  idContactMessage: number;
  typeMessage: MessagesTypesEnum;
  url: string;
  message: string;
  batchMessage: string;
  idTypeComunication: number;
  createdAt: number;
  state: MessageStateEnum;
}

export interface MessageMediaPreviewBoxType {
  idContactMessage: number;
  typeMessage: MessagesTypesEnum;
  url: string;
  message: string;
  batchMessage: string;
  idTypeComunication: number;
  createdAt: number;
  state: MessageStateEnum;
}

export interface MessageDocumentBoxType {
  idContactMessage: number;
  typeMessage: MessagesTypesEnum;
  fileName: string;
  message: string;
  batchMessage: string;
  idTypeComunication: number;
  createdAt: number;
  isEdit: boolean;
  typeFile: DocumentType;
  state: MessageStateEnum;
}

export interface MessageLinkBoxType {
  idContactMessage: number;
  typeMessage: MessagesTypesEnum;
  message: string;
  batchMessage: string;
  idTypeComunication: number;
  createdAt: number;
  isEdit: boolean;
  state: MessageStateEnum;
  isNewDay: boolean;
}

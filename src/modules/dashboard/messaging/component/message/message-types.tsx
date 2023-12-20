import { MessageStateEnum } from '@src/modules/dashboard/dashboard-types';

export type DocumentType = 'doc' | 'pdf' | 'xlsx' | 'ppt';

export interface MessageNormalBoxType {
  message: string
  sendId: string
  createdAt: number
  userId: string
  isEdit: boolean
  state: MessageStateEnum
  isNewDay: boolean
}

export interface MessageInfoBoxType {
  message: string
}

export interface MessageLockedBoxType {
  userId: string
  sendId: string
}

export interface MessageNotificationBoxType {
  message: string
}

export interface MessageMediaBoxType {
  url: string
  message: string
  sendId: string
  userId: string
  createdAt: number
  state: MessageStateEnum
}

export interface MessageMediaPreviewBoxType {
  url: string
  message: string
  sendId: string
  userId: string
  createdAt: number
  state: MessageStateEnum
}

export interface MessageDocumentBoxType {
  fileName: string
  message: string
  sendId: string
  userId: string
  createdAt: number
  typeFile: DocumentType
  state: MessageStateEnum
}


export interface MessageLinkBoxType {
  id: string
  message: string
  sendId: string
  userId: string
  createdAt: number
  state: MessageStateEnum
}
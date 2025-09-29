import { MessageStateEnum } from '@src/modules/dashboard/dashboard-types';

export interface ChatItemType {
  message: string;
  messagesUnread: string
  name: string;
  avatar: string | undefined;
  handleClickChat?: (id: string) => void;
  idContact: number;
  idTypeComunication: number;
  idContactMessageState: MessageStateEnum;
  sendDateTime: string;
}

export interface ContactProps {
  lastMessage: string;
  messagesUnread: string
  name: string;
  pathImagen: string | undefined;
  idUser: number
  // stateMessage: MessageStateEnum;
  // handleClickChat?: (id: string) => void;
  idContact: number;
  idTypeComunication: number;
  idContactMessageState: MessageStateEnum;
  dSendDateTime: string;
}

export interface FormSearchContact {
  nameContact?: string
}
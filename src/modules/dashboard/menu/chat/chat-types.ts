import { MessageStateEnum } from '../../dashboard-types';

export enum MenuTabsEnum {
  CONTACT = 'Contactos',
  GROUP = 'Grupos',
  REQUEST = 'Solicitudes',
  SEARCH = 'Buscar',
}

export enum MessagesTypesEnum {
  NORMAL = 'TYPE_1',
  INFO = 'TYPE_2',
  LOCKED = 'TYPE_3',
  NOTIFICATION = 'TYPE_4',
}

export interface MessagesType {
  id: string;
  name: string;
  message: string;
  sendId: string;
  receivedId: string;
  createdAt: number;
  state: MessageStateEnum;
  typeMessage: MessagesTypesEnum;
  isNewDay: boolean;
  isEdit: boolean;
}

export interface MessagingType {
  id: string | null;
  messages: MessagesType[];
}

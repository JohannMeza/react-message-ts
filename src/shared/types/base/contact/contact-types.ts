import { MessageStateEnum } from "@src/modules/dashboard/dashboard-types"

export enum ContactStateType {
  CONTACT = 'Contacto',
  BLOCKED = 'Bloqueado',
  DELETED = 'Eliminado',
  EDITION = 'Eliminado',
}

export interface ContactProps {
  idContactMe: number
  idContactYour: number
  idUserContact: number
  name: string
  pathImage: string
  info: string
  typeContact: MessageStateEnum
  stateContact: ContactStateType
}

export interface GroupProps {
  idGroup: number
  idGroupMember: number
  name: string
  pathImage: string
  info: string
  typeContact: MessageStateEnum
  stateContact: ContactStateType
}
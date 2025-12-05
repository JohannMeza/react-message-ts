import { MessagingContainer } from '../messaging-types';

export enum ProfileUserCurrentView {
  MAIN = '',
  DIRECT_MESSAGE = 'direct_messages',
  FILE = 'files',
}

interface ImagesProfileUser {
  idMessage: number
  message: string
}

interface CommonGroupsProfileUser {
  idGroup: number
  pathImage: string
  name: string
  info: string
}

interface MemberProfileGroup {
  idContact: number
  pathImage: string
  name: string
  info: string
}

export interface ProfileUser {
  name: string
  info: string
  pathImage: string
  images: ImagesProfileUser[]
  commonGroups: CommonGroupsProfileUser[]
  members: MemberProfileGroup[]
  typeMessaging: MessagingContainer
}

export interface FetchProfileMessaging {
  idUser?: number
  idUserContact?: number
  idGroup?: number
  idGroupMember?: number
  typeMessaging: MessagingContainer
}
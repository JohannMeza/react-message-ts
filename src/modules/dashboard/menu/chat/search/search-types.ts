import { FC } from 'react';

export enum SearchContainEnum {
  EMPTY = 'EMPTY',
  NOT_FOUND = 'NOT_FOUND',
  FOUND = 'FOUND'
}

export interface FormSearchUsersProps {
  username: string
  idUser: number
}

export interface SearchUsersProps {
  idUserContact: number
  username: string
  pathImage: string
  name: string
  info: string
}

export interface UseHandleSearchUsers {
  users: SearchUsersProps[]
  reset: () => void
}

export interface SearchContainTypes {
  [SearchContainEnum.EMPTY]: FC<SearchContainEmptyType>,
  [SearchContainEnum.FOUND]: FC<SearchContainFoundType>,
  [SearchContainEnum.NOT_FOUND]: FC<SearchContainNotFoundType>,
}

export type SearchContainItemType = SearchContainEmptyType 
  & SearchContainFoundType
  & SearchContainNotFoundType;

export interface SearchContainEmptyType {
  loading: boolean
}

export interface SearchContainFoundType {
  loading: boolean
  username: string
  users: SearchUsersProps[]
  idUser: number
  callViewUserData: (idon: number, idUserContact: number) => void
}

export interface SearchContainNotFoundType {
  loading: boolean
}

export interface UseHandleContainSearch {
  loading: boolean
  username: string
  users: SearchUsersProps[]
}
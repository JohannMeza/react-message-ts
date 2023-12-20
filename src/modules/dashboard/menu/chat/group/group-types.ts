import { MessageStateEnum } from '@src/modules/dashboard/dashboard-types';

export interface GroupItemType {
  message: string
  name: string
  avatar: string | null
  state: MessageStateEnum
  handleClickChat?: (id: string) => void
  id: string
  createdAt: number
}
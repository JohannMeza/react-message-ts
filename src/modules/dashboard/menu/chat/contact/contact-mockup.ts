import { MessageStateEnum } from '@src/modules/dashboard/dashboard-types';
import { ChatItemType } from './contact-types';

export const contactsMockup: ChatItemType[] = [
  {
    name: 'Esther Howard',
    message: 'lorem ipsum',
    state: MessageStateEnum.READED,
    avatar: null,
    createdAt: 1696214397605,
    id: '1'
  },
  {
    name: 'Esther Howard',
    message: 'lorem ipsum',
    state: MessageStateEnum.READED,
    avatar: null,
    createdAt: 1668307200000,
    id: '2'
  },
  {
    name: 'Esther Howard',
    message: 'lorem ipsum',
    state: MessageStateEnum.READED,
    avatar: null,
    createdAt: 1673414400000,
    id: '3'
  },
  {
    name: 'Esther Howard',
    message: 'lorem ipsum',
    state: MessageStateEnum.READED,
    avatar: null,
    createdAt: 1696698883341,
    id: '4'
  },
  {
    name: 'David Cerron',
    message: 'lorem ipsum',
    state: MessageStateEnum.UNREAD,
    avatar: null,
    createdAt: 1696698883341,
    id: '5'
  },
  {
    name: 'Nicole Perez',
    message: 'lorem ipsum',
    state: MessageStateEnum.READED,
    avatar: null,
    createdAt: 1696698883341,
    id: '6'
  },
  {
    name: 'Hellen Fernadez',
    message: 'lorem ipsum',
    state: MessageStateEnum.READED,
    avatar: null,
    createdAt: 1696698883341,
    id: '7'
  },
];



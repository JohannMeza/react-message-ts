import { MessageStateEnum } from '@src/modules/dashboard/dashboard-types';
import { LinksMockupType } from './link-types';

export const MessagesLinksMockup: LinksMockupType[] = [
  {
    month: 'ESTE MES',
    messages: [
      {
        id: '1234564asdasd',
        message: 'http://127.0.0.1:5173/messaging',
        sendId: 'string',
        userId: 'string',
        createdAt: 15644,
        state: MessageStateEnum.READED,
      },
      {
        id: '1234asdgv564',
        message: 'http://127.0.0.1:5173/messaging',
        sendId: 'string',
        userId: 'string',
        createdAt: 15644,
        state: MessageStateEnum.READED,
      },
    ]
  },
  {
    month: 'AGOSTO',
    messages: [
      {
        id: '1234qwdqw564',
        message: 'http://127.0.0.1:5173/messaging',
        sendId: 'string',
        userId: 'string',
        createdAt: 15644,
        state: MessageStateEnum.READED,
      },
      {
        id: '1234qwdqw564',
        message: 'http://127.0.0.1:5173/messaging',
        sendId: 'string',
        userId: 'string',
        createdAt: 15644,
        state: MessageStateEnum.READED,
      },
    ]
  },
];
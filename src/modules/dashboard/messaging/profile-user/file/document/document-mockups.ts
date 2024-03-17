import { MessageStateEnum } from '@src/modules/dashboard/dashboard-types';
import { MessagesDocumentTypes } from './document-types';
import { MessagesTypesEnum } from '../../../messaging-types';

export const messagesDocumentMockup: MessagesDocumentTypes[] = [
  {
    month: 'ESTE MES',
    messages: [
      {
        id: '1451',
        name: 'string',
        createdAt: 1456456,
        fileName:
          'INSTITUTO DE EDUCACIÓN SUPERIOR TECNOLOGICA TECNOLOGICA PUBLICO.docs',
        message: 'Lorem ipsun dolor',
        receivedId: '15',
        sendId: '1',
        state: MessageStateEnum.READED,
        typeMessage: MessagesTypesEnum.DOCUMENT,
        typeFile: 'pdf',
        isNewDay: false,
        isEdit: false,
        url: '',
      },
      {
        id: '1452',
        name: 'string',
        createdAt: 1456456,
        fileName:
          'INSTITUTO DE EDUCACIÓN SUPERIOR TECNOLOGICA TECNOLOGICA PUBLICO.docs',
        message: 'Lorem ipsun dolor',
        receivedId: '15',
        sendId: '1',
        state: MessageStateEnum.READED,
        typeMessage: MessagesTypesEnum.DOCUMENT,
        typeFile: 'pdf',
        isNewDay: false,
        isEdit: false,
        url: '',
      },
      {
        id: '1453',
        name: 'string',
        createdAt: 1456456,
        fileName:
          'INSTITUTO DE EDUCACIÓN SUPERIOR TECNOLOGICA TECNOLOGICA PUBLICO.docs',
        message: 'Lorem ipsun dolor',
        receivedId: '15',
        sendId: '1',
        state: MessageStateEnum.READED,
        typeMessage: MessagesTypesEnum.DOCUMENT,
        typeFile: 'pdf',
        isNewDay: false,
        isEdit: false,
        url: '',
      },
    ],
  },
  {
    month: 'SEPTIEMBRE',
    messages: [
      {
        id: '1454',
        name: 'string',
        createdAt: 1456456,
        fileName:
          'INSTITUTO DE EDUCACIÓN SUPERIOR TECNOLOGICA TECNOLOGICA PUBLICO.docs',
        message: 'Lorem ipsun dolor',
        receivedId: '15',
        sendId: '1',
        state: MessageStateEnum.READED,
        typeMessage: MessagesTypesEnum.DOCUMENT,
        typeFile: 'pdf',
        isNewDay: false,
        isEdit: false,
        url: '',
      },
    ],
  },
];

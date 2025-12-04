import { MessageStateEnum } from '@src/modules/dashboard/dashboard-types';
import { MessagesDocumentTypes } from './document-types';
import { MessagesTypesEnum } from '../../../messaging-types';

export const messagesDocumentMockup: MessagesDocumentTypes[] = [
  {
    month: 'ESTE MES',
    messages: [
      {
        name: 'string',
        createdAt: 1456456,
        fileName: 'INSTITUTO DE EDUCACIÓN SUPERIOR TECNOLOGICA TECNOLOGICA PUBLICO.docs',
        message: 'Lorem ipsun dolor',
        state: MessageStateEnum.READED,
        typeMessage: MessagesTypesEnum.DOCUMENT,
        typeFile: 'pdf',
        isNewDay: false,
        isEdit: false,
        url: '',
        idContactMessage: 0,
        batchMessage: '',
        idTypeComunication: 0,
        sendDateTime: '',
        idContactMessageState: 0
      },
      {
        name: 'string',
        createdAt: 1456456,
        fileName: 'INSTITUTO DE EDUCACIÓN SUPERIOR TECNOLOGICA TECNOLOGICA PUBLICO.docs',
        message: 'Lorem ipsun dolor',
        state: MessageStateEnum.READED,
        typeMessage: MessagesTypesEnum.DOCUMENT,
        typeFile: 'pdf',
        isNewDay: false,
        isEdit: false,
        url: '',
        idContactMessage: 0,
        batchMessage: '',
        idTypeComunication: 0,
        sendDateTime: '',
        idContactMessageState: 0
      },
      {
        name: 'string',
        createdAt: 1456456,
        fileName: 'INSTITUTO DE EDUCACIÓN SUPERIOR TECNOLOGICA TECNOLOGICA PUBLICO.docs',
        message: 'Lorem ipsun dolor',
        state: MessageStateEnum.READED,
        typeMessage: MessagesTypesEnum.DOCUMENT,
        typeFile: 'pdf',
        isNewDay: false,
        isEdit: false,
        url: '',
        idContactMessage: 0,
        batchMessage: '',
        idTypeComunication: 0,
        sendDateTime: '',
        idContactMessageState: 0
      },
    ],
  },
  {
    month: 'SEPTIEMBRE',
    messages: [
      {
        name: 'string',
        createdAt: 1456456,
        fileName: 'INSTITUTO DE EDUCACIÓN SUPERIOR TECNOLOGICA TECNOLOGICA PUBLICO.docs',
        message: 'Lorem ipsun dolor',
        state: MessageStateEnum.READED,
        typeMessage: MessagesTypesEnum.DOCUMENT,
        typeFile: 'pdf',
        isNewDay: false,
        isEdit: false,
        url: '',
        idContactMessage: 0,
        batchMessage: '',
        idTypeComunication: 0,
        sendDateTime: '',
        idContactMessageState: 0
      },
    ],
  },
];

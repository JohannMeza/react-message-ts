import { createAction } from '@cobuildlab/react-simple-state';
import { messagingOpenEvent, messagingOpenEventError } from './menu/chat/chat-events';
import { MessagesTypesEnum, MessagingType } from './menu/chat/chat-types';
import { MessageStateEnum } from './dashboard-types';

export const fetchMessagingUser = createAction(
  messagingOpenEvent,
  messagingOpenEventError,
  async (messagingId: string | undefined): Promise<MessagingType> => {
    if (!messagingId) return { id: null, messages: [] };
    return { 
      id: messagingId,
      messages: [
        {
          id: 'string',
          name: 'string',
          message: '',
          sendId: '',
          receivedId: '',
          typeMessage: MessagesTypesEnum.LOCKED,
          createdAt: 12345,
          isEdit: true,
          isNewDay: true,
          state: MessageStateEnum.READED
        }
      ]
    };
  }
);

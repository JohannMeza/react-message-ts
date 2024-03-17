import { Event, createEvent } from '@cobuildlab/react-simple-state';
import { ModalsChatEnum } from './chat-types';

export const activeModalChatViewEvent = createEvent({
  initialValue: { view: ModalsChatEnum.NONE },
});
export const activeModalChatViewError: Event<Error> = createEvent();

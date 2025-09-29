import { MessagesType } from '../../messaging/messaging-types';
import { MenuTabsEnum } from './chat-types';
import { createEvent } from '@cobuildlab/react-simple-state';

export const tabsMenuEvent = createEvent<MenuTabsEnum>({
  initialValue: MenuTabsEnum.CONTACT,
});

export const messagingOpenEvent = createEvent<MessagesType[]>({ initialValue: [] });
export const messagingOpenEventError = createEvent<Error>();

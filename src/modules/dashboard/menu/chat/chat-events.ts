import { MenuTabsEnum, MessagingType } from './chat-types';
import { createEvent } from '@cobuildlab/react-simple-state';

export const tabsMenuEvent = createEvent<MenuTabsEnum>({ initialValue: MenuTabsEnum.CONTACT });

export const messagingOpenEvent = createEvent<MessagingType>({ initialValue: { id: null, messages: [] } });
export const messagingOpenEventError = createEvent<Error>();
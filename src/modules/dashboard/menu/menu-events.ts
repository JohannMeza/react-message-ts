import { Event, createEvent } from '@cobuildlab/react-simple-state';
import { MenuCurrentViewEnum } from './menu-types';

export const menuCurrentViewEvent = createEvent({ initialValue: { view: MenuCurrentViewEnum.CHAT, position: '-100%' } });
export const menuCurrentViewEventError: Event<Error> = createEvent();
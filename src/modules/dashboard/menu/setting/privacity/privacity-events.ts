import { Event, createEvent } from '@cobuildlab/react-simple-state';
import { PrivacityCurrentViewEnum } from './privacity-types';

export const privacityCurrentViewEvent = createEvent({ initialValue: { view: PrivacityCurrentViewEnum.MAIN, position: '0%' } });
export const privacityCurrentViewEventError: Event<Error> = createEvent();
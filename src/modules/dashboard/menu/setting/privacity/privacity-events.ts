import { Event, createEvent } from '@cobuildlab/react-simple-state';
import { PrivacityCurrentViewEnum, PrivacyBoxType } from './privacity-types';

export const privacityCurrentViewEvent = createEvent({
  initialValue: { view: PrivacityCurrentViewEnum.MAIN, position: '0%' },
});
export const privacityCurrentViewEventError: Event<Error> = createEvent();

export const propsPrivacyCurrentViewEvent = createEvent<PrivacyBoxType>({ initialValue: {} as PrivacyBoxType });
export const propsPrivacyCurrentViewEventError = createEvent<Error>();
import { Event, createEvent } from '@cobuildlab/react-simple-state';
import { ActiveProfileUserEnum } from './messaging-types';

export const activeProfileUserViewEvent = createEvent({
  initialValue: { view: ActiveProfileUserEnum.NONE },
});
export const activeProfileUserViewEventError: Event<Error> = createEvent();

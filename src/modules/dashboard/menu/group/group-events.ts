import { Event, createEvent } from '@cobuildlab/react-simple-state';
import { GroupCurrentViewEnum } from './group-types';

export const groupCurrentViewEvent = createEvent({
  initialValue: { view: GroupCurrentViewEnum.MEMBER, position: '0%' },
});
export const groupCurrentViewEventError: Event<Error> = createEvent();

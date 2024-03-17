import { Event, createEvent } from '@cobuildlab/react-simple-state';
import { FileCurrentViewEnum } from './file-types';

export const fileCurrentViewEvent = createEvent({
  initialValue: FileCurrentViewEnum.MULTIMEDIA,
});
export const fileCurrentViewEventError: Event<Error> = createEvent();

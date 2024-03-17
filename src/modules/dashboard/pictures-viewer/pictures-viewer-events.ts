import { Event, createEvent } from '@cobuildlab/react-simple-state';

export const picturesViewerEvent = createEvent({
  initialValue: { active: false },
});
export const picturesViewerEventError: Event<Error> = createEvent();

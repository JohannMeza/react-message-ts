import { Event, createEvent } from '@cobuildlab/react-simple-state';
import { ProfileUserCurrentView } from './profile-user-types';

export const profileUserCurrentViewEvent = createEvent({
  initialValue: { view: ProfileUserCurrentView.MAIN, position: '0%' },
});
export const profileUserCurrentViewEventError: Event<Error> = createEvent();

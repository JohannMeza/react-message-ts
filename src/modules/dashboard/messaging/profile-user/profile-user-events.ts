import { Event, createEvent } from '@cobuildlab/react-simple-state';
import { ProfileUser, ProfileUserCurrentView } from './profile-user-types';
import { ResponseError } from '@src/shared/types/type';

export const profileUserCurrentViewEvent = createEvent({
  initialValue: { view: ProfileUserCurrentView.MAIN, position: '0%' },
});
export const profileUserCurrentViewEventError: Event<Error> = createEvent();

export const fetchProfileMessagingEvent = createEvent<ProfileUser>();
export const fetchProfileMessagingEventError = createEvent<ResponseError>();
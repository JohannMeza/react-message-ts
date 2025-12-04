import { createEvent, Event } from '@cobuildlab/react-simple-state';
import { ResponseError } from '@src/shared/types/type';
import { MemberContactSelectProps, MemberContactsProps } from './member-types';

export const memberContactSelectEvent = createEvent<MemberContactSelectProps[]>({ initialValue: [] });
export const memberContactSelectEventError: Event<ResponseError> = createEvent();

export const memberContactsAddedEvent = createEvent<MemberContactsProps[]>();
export const memberContactsAddedEventError: Event<ResponseError> = createEvent();
import { createEvent } from '@cobuildlab/react-simple-state';
import { ResponseError, ResponseSuccess } from '@src/shared/types/type';
import { InvitationProps } from './invitation-types';

export const acceptInvitationEvent = createEvent<ResponseSuccess>();
export const acceptInvitationEventError = createEvent<ResponseError>();

export const rejectInvitationEvent = createEvent<ResponseSuccess>();
export const rejectInvitationEventError = createEvent<ResponseError>();

export const listInvitationsEvent = createEvent<InvitationProps[]>({ initialValue: [] });
export const listInvitationsEventError = createEvent<ResponseError>();
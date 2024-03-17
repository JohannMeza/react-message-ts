import { DialogProps } from '@mui/material';
import { ActionsMessagingEnum } from '../../../messaging-types';

export type ChatModalType = DialogProps & {
  handleClose: () => void;
  handleSuccess: () => void;
  title: string;
  open: boolean;
  textSuccess: string;
};

export enum ModalsChatEnum {
  NONE = '',
  LOCKED_CHAT = ActionsMessagingEnum.LOCKED_CHAT,
  DELETE_CHAT = ActionsMessagingEnum.DELETE_CHAT,
  CLEAR_CHAT = ActionsMessagingEnum.CLEAR_CHAT,
  REPORT_CHAT = ActionsMessagingEnum.REPORT_CHAT,
}

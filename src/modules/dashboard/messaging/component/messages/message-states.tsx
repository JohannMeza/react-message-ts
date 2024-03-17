import { MessageStateEnum } from '@src/modules/dashboard/dashboard-types';
import { MessageIssendBy } from './message-types';
import CheckIcon from '@mui/icons-material/Check';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import {
  OptionsPopperGroupMe,
  OptionsPopperGroupOther,
  OptionsPopperMe,
  OptionsPopperOther,
} from './message-mockups';

export const MessageStateIcon = {
  [MessageStateEnum.READED]: <DoneAllIcon fontSize="small" color="info" />,
  [MessageStateEnum.UNREAD]: <CheckIcon fontSize="small" color="action" />,
};

export const MessagePopperState = {
  [MessageIssendBy.ME]: OptionsPopperMe,
  [MessageIssendBy.GROUP_ME]: OptionsPopperGroupMe,
  [MessageIssendBy.OTHER]: OptionsPopperOther,
  [MessageIssendBy.GROUP_OTHER]: OptionsPopperGroupOther,
};

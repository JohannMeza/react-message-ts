import { FC } from 'react';
import { Avatar, Box, Stack, Typography } from '@mui/material';
import { useCallAction } from '@cobuildlab/react-simple-state';
import { fetchMessagingUser } from '../../../dashboard-actions';
import { getPastDate } from '@src/modules/dashboard/dashboard-functions';
import { MessageStateEnum } from '../../../dashboard-types';
import { ChatItemType } from '../contact/contact-types';
import CheckIcon from '@mui/icons-material/Check';
import DoneAllIcon from '@mui/icons-material/DoneAll';

export const ChatItemView: FC<ChatItemType> = ({
  message,
  name,
  avatar,
  state,
  id,
  createdAt,
}) => {
  const [callMessagingUser] = useCallAction(fetchMessagingUser);

  const MessageStateIcon = {
    [MessageStateEnum.READED]: <DoneAllIcon fontSize="small" color="info" />,
    [MessageStateEnum.UNREAD]: <CheckIcon fontSize="small" color="action" />,
  };

  return (
    <Stack
      sx={{
        '&:hover': { backgroundColor: 'background_colors_opacity.60' },
        cursor: 'pointer',
      }}
      onClick={() => callMessagingUser(id)}
      flexDirection="row"
      paddingX={2}
      paddingY={1}
      gap={2}
    >
      <Avatar src={avatar ?? ''} />
      <Box width={1}>
        <Stack
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          width={1}
        >
          <Typography fontSize={16} fontWeight={700} color="grey.700">
            {name}
          </Typography>
          <Typography fontSize={12} color="grey.700">
            {getPastDate(createdAt)}
          </Typography>
        </Stack>
        <Stack flexDirection="row" gap={1}>
          {MessageStateIcon[state]}
          <Typography fontSize={14} fontWeight={400} color="gray.600">
            {message}
          </Typography>
        </Stack>
      </Box>
    </Stack>
  );
};

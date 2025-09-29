import { FC, useState } from 'react';
import { Avatar, Box, Stack, Typography } from '@mui/material';
import { useCallAction } from '@cobuildlab/react-simple-state';
import { fetchContactData } from '../../../dashboard-actions';
import { getPastDateString } from '@src/modules/dashboard/dashboard-functions';
import { MessageStateEnum } from '../../../dashboard-types';
import { ChatItemType } from '../contact/contact-types';
import CheckIcon from '@mui/icons-material/Check';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import { ComunicationTypesEnum } from '@src/shared/types/base/message/message-types';
import { updateStateMessages } from '../contact/contact-actions';
import { styled } from '@mui/material/styles';

const BoxLengthUnread = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: 'auto',
  padding: '0 4px',
  width: 'auto',
  maxWidth: '28px',
  minWidth: '20px',
  height: '20px',
  background: theme.palette.blue.main,
  borderRadius: '25px'
}));

export const ChatItemView: FC<ChatItemType> = ({
  message,
  messagesUnread,
  name,
  avatar,
  idContact,
  idTypeComunication,
  idContactMessageState,
  sendDateTime,
}) => {
  const [isRead, setIsRead] = useState<boolean>(false);
  const [callState] = useCallAction(updateStateMessages);
  const [callContact] = useCallAction(fetchContactData, {
    onCompleted(resp) {
      if (idContactMessageState === MessageStateEnum.RECEIVED && 
        idTypeComunication === ComunicationTypesEnum.RECEIVER) {
        callState(resp.idContactMe, resp.idContactYour);
      }
    }
  });

  const MessageStateIcon = {
    [MessageStateEnum.SENT]: <DoneAllIcon fontSize="small" color="info" />,
    [MessageStateEnum.RECEIVED]: <CheckIcon fontSize="small" color="action" />,
    [MessageStateEnum.READ]: <DoneAllIcon fontSize="small" color="info" />,
    [MessageStateEnum.DELETED]: <CheckIcon fontSize="small" color="action" />,
  };

  const colorMessageUnread = (Boolean(messagesUnread) && !isRead &&
    idTypeComunication === ComunicationTypesEnum.RECEIVER) ? 'blue.main' : 'grey.700';
    
  return (
    <Stack
      sx={{
        '&:hover': { backgroundColor: 'background_colors_opacity.60' },
        cursor: 'pointer',
      }}
      onClick={() => {
        setIsRead(true);
        callContact(idContact);
      }}
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
          <Box sx={{ overflow: 'hidden', display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 1 }}>
            <Typography fontSize={16} fontWeight={700} color="grey.700" title={name}>
              {name}
            </Typography>
          </Box>
          <Typography fontSize={12} color={colorMessageUnread}>
            {
              sendDateTime &&
              getPastDateString(sendDateTime)
            }
          </Typography>
        </Stack>
        <Stack flexDirection="row" gap={1} alignItems={'center'}>
          {
            idTypeComunication === ComunicationTypesEnum.TRANSMITER &&
            MessageStateIcon[idContactMessageState]
          }
          <Box sx={{ overflow: 'hidden', display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 1 }}>
            <Typography fontSize={14} fontWeight={400} color="gray.600" title={message}>
              {message}
            </Typography>
          </Box>
          {
            (Boolean(messagesUnread) && 
            !isRead &&
            idTypeComunication === ComunicationTypesEnum.RECEIVER) &&
            <BoxLengthUnread>
              <Typography fontSize={11} fontWeight={400} color="white.main">
                {messagesUnread}
              </Typography>
            </BoxLengthUnread>
          }
        </Stack>
      </Box>
    </Stack>
  );
};

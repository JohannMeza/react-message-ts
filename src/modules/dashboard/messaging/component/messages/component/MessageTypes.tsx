import { Typography, Box, Stack } from '@mui/material';
import { ReactNode } from 'react';
import { getPastDateString } from '@src/modules/dashboard/dashboard-functions';
import {
  MessageDocument,
  MessageImagePreview,
  MessageInfo,
  MessageInfoDay,
  MessageLocked,
  MessageNormal,
  MessageNotification,
} from '../message-styles';
import {
  MessageDocumentBoxType,
  MessageInfoBoxType,
  MessageLinkBoxType,
  MessageLockedBoxType,
  MessageMediaBoxType,
  MessageMediaPreviewBoxType,
  MessageNormalBoxType,
  MessageNotificationBoxType,
} from '../message-types';
import { styled } from '@mui/material/styles';
import { MessagePopper } from './MessagePopper';
import { MessageStateIcon } from '../message-states';
import { useHandleActivePicturesViewer } from '@src/modules/dashboard/pictures-viewer/pictures-viewer-hooks';
import moment from 'moment';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import { ComunicationTypesEnum } from '@src/shared/types/base/message/message-types';

export const MessageNormalBox = <T extends MessageNormalBoxType>(
  props: T,
): React.ReactElement => {
  console.log(props);
  return (
  <>
    {props.isNewDay && (
      <MessageInfoDay 
        className={'date-message-info'}
      >{getPastDateString(props.sendDateTime)}
      </MessageInfoDay>
    )}
    <MessageNormal isendme={props.idTypeComunication === ComunicationTypesEnum.TRANSMITER ? 'true' : ''} name={props.name} >
      <Typography color='blue.main' fontWeight={900} position='absolute' top={2} fontSize={12}>
        {props.name}<br />
      </Typography>
      {props.message}

      <MessagePopper 
        idContactMessage={props.idContactMessage}
        messageEdit={props.message}
        batchMessage={props.batchMessage}
      />
    
      <Box
        marginLeft={1}
        sx={{
          float: 'right',
          position: 'relative',
          right: '-12px',
          bottom: '-12px',
        }}
      >
        <Box display="flex" flexDirection="row" alignItems="center" gap={0.5}>
          <Typography fontSize={12} fontWeight={600} textAlign="end">
            {props.isEdit && 'Editado'}
          </Typography>
          <Typography fontSize={12} fontWeight={600} textAlign="end">
            {moment(props.sendDateTime).format('HH:mm a')}
          </Typography>
          {props.idTypeComunication === ComunicationTypesEnum.TRANSMITER && MessageStateIcon[props.state]}
        </Box>
      </Box>
    </MessageNormal>
  </>
);
};

export const MessageInfoBox = <T extends MessageInfoBoxType>(
  props: T,
): ReactNode => <MessageInfo>{props.message}</MessageInfo>;

export const MessageLockedBox = <T extends MessageLockedBoxType>(
  props: T,
): ReactNode => (
  <MessageLocked>
    {props.idTypeComunication === ComunicationTypesEnum.TRANSMITER
      ? 'Has bloqueado a este usuario'
      : 'Johann Meza te ha bloqueado'}
  </MessageLocked>
);

export const MessageNotificationBox = <T extends MessageNotificationBoxType>(
  props: T,
): ReactNode => <MessageNotification>{props.message}</MessageNotification>;

export const MessageMediaBox = <T extends MessageMediaBoxType>(
  props: T,
): ReactNode => <>{props}</>;

export const MessageMediaPreviewBox = <T extends MessageMediaPreviewBoxType>(
  props: T,
): ReactNode => {
  const { handleChangeImageViewer } = useHandleActivePicturesViewer();
  const { url } = props;
  const styleImage: React.CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '5px',
  };

  return (
    <MessageImagePreview onClick={() => handleChangeImageViewer(true)}>
      <img src={url} alt="Message" style={styleImage} />
    </MessageImagePreview>
  );
};

export const MessageDocumentBox = <T extends MessageDocumentBoxType>(
  props: T,
): ReactNode => {
  const { fileName, message } = props;

  const StyleLinkBox = styled(Stack)(({ theme }) => ({
    minWidth: '75px',
    minHeight: '75px',
    display: 'flex',
    background: theme.palette.grey[100],
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '15px',
  }));

  const StyleNameFileBox = styled(Typography)(() => ({
    display: '-webkit-box',
    textWrap: 'wrap',
    overflow: 'hidden',
    wordBreak: 'break-all',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: '2',
    textOverflow: 'ellipsis',
  }));

  return (
    <MessageDocument isendme={props.idTypeComunication === ComunicationTypesEnum.TRANSMITER ? 'true' : ''}>
      <Stack flexDirection="row" alignItems="center" gap={2}>
        <StyleLinkBox>
          <InsertLinkIcon />
        </StyleLinkBox>
        <Stack flexDirection="column">
          <StyleNameFileBox>
            <Typography component="span" fontSize={18} fontWeight={500}>
              {fileName}
            </Typography>
          </StyleNameFileBox>
          <Typography component="span" fontSize={14} fontWeight={500}>
            15 páginas - DOCS - 1MB
          </Typography>
        </Stack>
      </Stack>

      <MessagePopper 
        idContactMessage={props.idContactMessage}
        batchMessage={props.batchMessage}
        messageEdit={props.message}
      />

      <Box>
        <Typography component="span">{message}</Typography>
        <Box
          marginLeft={1}
          sx={{
            float: 'right',
            position: 'relative',
            right: '-12px',
            bottom: '-12px',
          }}
        >
          <Box display="flex" flexDirection="row" alignItems="center" gap={0.5}>
            <Typography fontSize={12} fontWeight={600} textAlign="end">
              {props.isEdit && 'Editado'}
            </Typography>
            <Typography fontSize={12} fontWeight={600} textAlign="end">
              {moment(props.createdAt).format('HH:mm a')}
            </Typography>
            {props.idTypeComunication === ComunicationTypesEnum.TRANSMITER && MessageStateIcon[props.state]}
          </Box>
        </Box>
      </Box>
    </MessageDocument>
  );
};

export const MessageLinkBox = <T extends MessageLinkBoxType>(
  props: T,
): ReactNode => {
  const { message, isEdit, createdAt, state } = props;

  const StyleLinkBox = styled(Stack)(({ theme }) => ({
    minWidth: '75px',
    minHeight: '75px',
    display: 'flex',
    background: theme.palette.grey[100],
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '15px',
  }));

  const StyleNameFileBox = styled(Typography)(() => ({
    display: '-webkit-box',
    textWrap: 'wrap',
    overflow: 'hidden',
    wordBreak: 'break-all',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: '2',
    textOverflow: 'ellipsis',
  }));

  return (
    <MessageDocument isendme={props.idTypeComunication === ComunicationTypesEnum.TRANSMITER ? 'true' : ''}>
      <Stack flexDirection="row" alignItems="center" gap={2}>
        <StyleLinkBox>
          <InsertLinkIcon />
        </StyleLinkBox>
        <Stack flexDirection="column">
          <StyleNameFileBox>
            <Typography component="span" fontSize={18} fontWeight={500}>
              {message}
            </Typography>
          </StyleNameFileBox>
          <Typography component="span" fontSize={14} fontWeight={500}>
            www.whatsapp.com
          </Typography>
        </Stack>
      </Stack>

      <Box>
        <Typography
          component="span"
          color="blue.main"
          sx={{ textDecoration: 'underline' }}
        >
          <a href={message} target="_blank">
            {message}
          </a>
        </Typography>
        <Box
          marginLeft={1}
          sx={{
            float: 'right',
            position: 'relative',
            right: '-12px',
            bottom: '-12px',
          }}
        >
          <Box display="flex" flexDirection="row" alignItems="center" gap={0.5}>
            <Typography fontSize={12} fontWeight={600} textAlign="end">
              {isEdit && 'Editado'}
            </Typography>
            <Typography fontSize={12} fontWeight={600} textAlign="end">
              {moment(createdAt).format('HH:mm a')}
            </Typography>
            {props.idTypeComunication === ComunicationTypesEnum.TRANSMITER && MessageStateIcon[state]}
          </Box>
        </Box>
      </Box>
    </MessageDocument>
  );
};

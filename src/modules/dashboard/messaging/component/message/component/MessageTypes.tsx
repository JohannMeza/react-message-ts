import { Paper, Typography, Box, Popper } from '@mui/material';
import React, { FC,  ReactNode,  useEffect, useRef, useState } from 'react';
import { getPastDate } from '@src/modules/dashboard/dashboard-functions';
import { MessageInfo, MessageInfoDay, MessageLocked, MessageNormal, MessageNormalIconButton, MessageNotification } from '../message-styles';
import { MessageStateEnum } from '@src/modules/dashboard/dashboard-types';
import { MessageDocumentBoxType, MessageInfoBoxType, MessageLinkBoxType, MessageLockedBoxType, MessageMediaBoxType, MessageMediaPreviewBoxType, MessageNormalBoxType, MessageNotificationBoxType } from '../message-types';
import moment from 'moment';
import CheckIcon from '@mui/icons-material/Check';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuItem from '@mui/material/MenuItem';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import MenuList from '@mui/material/MenuList';
type FirebaseObjectToDataType<T> = T;
type Portal = { [key: string]: ReactNode | number };


export const MessageNormalBox = <T extends Portal>(props: FirebaseObjectToDataType<T>): React.ReactElement => { 
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLDivElement >(null);
  const handleToggle = (): void => setOpen((prevOpen) => !prevOpen);
  const prevOpen = useRef(open);

  const handleClose = (event: Event | React.SyntheticEvent): void => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) return;
    setOpen(false);
  };
  
  const handleListKeyDown = (event: React.KeyboardEvent): void => {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  };

  const MessageStateIcon = {
    [MessageStateEnum.READED]: <DoneAllIcon fontSize="small" color='info' />,
    [MessageStateEnum.UNREAD]: <CheckIcon fontSize="small" color='action' />,
  };

  useEffect(() => {
    if (prevOpen.current === true && open === false) anchorRef.current!.focus();
    prevOpen.current = open;
  }, [open]);

  return (
  <>
    {
      props.isNewDay &&
      <MessageInfoDay>
        { getPastDate(props.createdAt) }
      </MessageInfoDay>
    }
    <MessageNormal isendme={props.userId === props.sendId ? 'true' : ''}>
      { props.message }
    
      <MessageNormalIconButton
        ref={anchorRef}
        id="composition-button"
        aria-controls={open ? 'composition-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        open={open}
      >
        <KeyboardArrowDownIcon />
      </MessageNormalIconButton>

      <Popper
        open={open}
        anchorEl={anchorRef.current}
        sx={{ zIndex: 1000 }}
        role={undefined}
        placement="bottom-start"
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom-start' ? 'left top' : 'left bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="composition-menu"
                  aria-labelledby="composition-button"
                  onKeyDown={handleListKeyDown}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
      
      <Box 
        marginLeft={1}
        sx={{ 
          float: 'right',
          position: 'relative',
          right: '-12px',
          bottom: '-12px',
        }}
      >
        <Box
          display="flex"
          flexDirection="row" 
          alignItems="center" 
          gap={0.5}
        >
          <Typography fontSize={12} fontWeight={600} textAlign="end">{ props.isEdit && 'Editado' }</Typography>
          <Typography fontSize={12} fontWeight={600} textAlign="end">{ moment(props.createdAt).format('HH:mm a') }</Typography>
          { props.userId === props.sendId && MessageStateIcon[props.state] }
        </Box>
      </Box>
    </MessageNormal>
  </>
);};

export const MessageInfoBox: FC<MessageInfoBoxType> = ({ message }) => (
  <MessageInfo>
    { message }
  </MessageInfo>
);

export const MessageLockedBox: FC<MessageLockedBoxType> = ({ userId, sendId }) => (
  <MessageLocked>
    {
      userId === sendId 
        ? 'Has bloqueado a este usuario' 
        : 'Johann Meza te ha bloqueado'
    }
  </MessageLocked>
);

export const MessageNotificationBox: FC<MessageNotificationBoxType> = ({ message }) => (
  <MessageNotification>{message}</MessageNotification>
);

export const MessageMediaBox: FC<MessageMediaBoxType> = () => <></>;
export const MessageMediaPreviewBox: FC<MessageMediaPreviewBoxType> = () => <></>;
export const MessageMediaDocumentBox: FC<MessageDocumentBoxType> = ({
  fileName,
  message,
  sendId,
  userId,
  createdAt,
  typeFile,
  state,
}) => <>{`${console.log(
  fileName,
  message,
  sendId,
  userId,
  createdAt,
  typeFile,
  state,)}`}</>;
export const MessageMediaLinkBox: FC<MessageLinkBoxType> = () => <></>;
import { Avatar, Box, Menu, MenuItem, Stack, Typography } from '@mui/material';
import { FC, PropsWithChildren, useEffect, useRef, useState } from 'react';
import { useHandleActiveProfileUser } from '../../messaging-hooks';
import { ProfileUserView } from '../../profile-user/ProfileUserView';
import { ActionsMessagingEnum, ActiveProfileUserEnum } from '../../messaging-types';
import { useCallAction, useEvent, useFetchAction } from '@cobuildlab/react-simple-state';
import { ChatView } from '../../component/modals/chat/ChatView';
import { useHandleChangeModalChatType } from '../../component/modals/chat/chat-hooks';
import { ModalsChatEnum } from '../../component/modals/chat/chat-types';
import { fetchMessagingUser } from '@src/modules/dashboard/dashboard-actions';
import { paddingResponsive } from '../../messaging-styles';
import { BoxSending, BoxUpdate } from './SectionMessageSend';
import { sendMessageToContact, updateMessageToContact } from '../../messaging-actions';
import { MessageTypesEnum } from '@src/shared/types/base/message/message-types';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { messageInitial } from '../../messaging-mockups';
import { MessageItemView } from '../messages/MessageView';
import { messageEditEvent } from '../messages/message-events';
import { MessageInfoDay } from '../messages/message-styles';
import { contactDataEvent } from '@src/modules/dashboard/dashboard-events';

export const MessagingContact: FC<PropsWithChildren> = () => {
  const contactData = useEvent(contactDataEvent);
  const [messages] = useFetchAction(fetchMessagingUser, [contactData?.idContactMe]);
  const clearData = (): void => contactDataEvent.dispatch(null);

  const messageEdit = useEvent(messageEditEvent);
  const { currentView, handleChangeActiveProfileUser } = useHandleActiveProfileUser();
  const containerRef = useRef<HTMLDivElement>(null);
  const downScroll = (): void => {
    setTimeout(() => {
      const container = containerRef.current;
      if (container) {
        container.scrollBy(0, container.scrollHeight);
      }
    }, 0);
  };
  const { handleChangeModalChat } = useHandleChangeModalChatType();
  const [callMessages] = useCallAction(fetchMessagingUser, {
    onCompleted() {
      downScroll();
    }
  });
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void =>
    setAnchorEl(event.currentTarget);
  const handleClose = (): void => setAnchorEl(null);
  const [callLogin] = useCallAction(fetchMessagingUser);
  const [callSendMessage] = useCallAction(sendMessageToContact, {
    onCompleted() {
      callMessages(contactData?.idContactMe);
    }
  });

  const [dataLabel, setDataLabel] = useState({ active: false, message: '' });
  const [callUpdateMessage] = useCallAction(updateMessageToContact, {
    onCompleted() {
      callMessages(contactData?.idContactMe);
      messageEditEvent.dispatch(null);
    }
  });

  const [time, setTime] = useState<ReturnType<typeof setTimeout> | null>(null);

  const handleViewProfile = (action: ActionsMessagingEnum): void => {
    switch (action) {
      case ActionsMessagingEnum.VIEW_PROFILE:
        handleChangeActiveProfileUser(ActiveProfileUserEnum.PROFILE_USER);
        break;
      case ActionsMessagingEnum.CLEAR_CHAT:
        handleChangeModalChat(ModalsChatEnum.CLEAR_CHAT);
        break;
      case ActionsMessagingEnum.CLOSE_CONTACT:
        clearData();
        break;
      case ActionsMessagingEnum.DELETE_CHAT:
        handleChangeModalChat(ModalsChatEnum.DELETE_CHAT);
        break;
      case ActionsMessagingEnum.LOCKED_CHAT:
        handleChangeModalChat(ModalsChatEnum.LOCKED_CHAT);
        break;
      case ActionsMessagingEnum.REPORT_CHAT:
        handleChangeModalChat(ModalsChatEnum.REPORT_CHAT);
        break;
      default:
        break;
    }

    handleClose();
  };

  const handleSendMessage = (message: string): void => {
    callSendMessage({
      idContactMe: contactData.idContactMe,
      idContactYour: contactData.idContactYour,
      idTypeMessage: MessageTypesEnum.NORMAL,
      description: '',
      message
    });
  };

  const handleUpdateMessage = (message: string, batchMessage: string): void => {
    callUpdateMessage({ batchMessage, message });
  };

  const handleScroll = (): void => {
    if (time) {
      clearTimeout(time);
      setTime(null);
    }

    if (!containerRef.current) return;
  
    const container = containerRef.current;
    const containerTop = container.getBoundingClientRect().top;
  
    // Suponiendo que tus fechas tienen alguna clase identificable como 'date-label'
    const spans = container.querySelectorAll('span.date-message-info');
  
    let closest: HTMLSpanElement = document.createElement('span');
    let maxTop = -Infinity;
  
    spans.forEach((span) => {
      const rect = span.getBoundingClientRect();
      const distanceToTop = (rect.top - containerTop) - 40;
  
      if (distanceToTop <= 0 && distanceToTop > maxTop) {
        maxTop = distanceToTop;
        closest = span as HTMLSpanElement  ;
      }
    });
  
    setDataLabel((dta) => ({ active: true, message: (closest && closest?.textContent) || dta.message }));

    setTime(setTimeout(() => {
      setDataLabel((dta) => ({ active: false, message: dta.message })); // Acción después de 3 segundos
    }, 3000));
  };

  useEffect(() => {
    downScroll();
    return () => {};
  }, []);

  return (
    <>
      <Box
        display="grid"
        gridTemplateRows="auto 1fr auto"
        width={1}
        height={1}
        paddingY={1}
      >
        <Stack
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          paddingX={paddingResponsive}
          paddingY={1}
        >
          <Stack flexDirection="row" alignItems="center" gap={2}>
            <Stack flexDirection="row" alignItems="center" gap={1}>
              <IconButton
                size="small"
                color="default"
                onClick={() => callLogin(contactData.idContactMe)}
                sx={{ display: { xs: 'block', md: 'none' } }}
              >
                <KeyboardArrowLeftIcon />
              </IconButton>
              <Avatar />
            </Stack>
            <Box>
              <Typography
                sx={{ cursor: 'pointer' }}
                fontWeight={700}
                color="grey.700"
                fontSize={20}
                onClick={() =>
                  handleViewProfile(ActionsMessagingEnum.VIEW_PROFILE)
                }
              >
                { contactData.name }
              </Typography>
              <Typography color="grey.700" fontSize={14}>
                Activo
              </Typography>
            </Box>
          </Stack>
          <IconButton
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            color="default"
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <MenuItem
              onClick={() =>
                handleViewProfile(ActionsMessagingEnum.VIEW_PROFILE)
              }
            >
              Ver Perfil
            </MenuItem>
            <MenuItem
              onClick={() => handleViewProfile(ActionsMessagingEnum.CLEAR_CHAT)}
            >
              Vaciar Chat
            </MenuItem>
            <MenuItem
              onClick={() =>
                handleViewProfile(ActionsMessagingEnum.DELETE_CHAT)
              }
            >
              Eliminar Chat
            </MenuItem>
            <MenuItem
              onClick={() =>
                handleViewProfile(ActionsMessagingEnum.CLOSE_CONTACT)
              }
            >
              Cerrar Contacto
            </MenuItem>
            <MenuItem
              onClick={() =>
                handleViewProfile(ActionsMessagingEnum.REPORT_CHAT)
              }
            >
              Reportar
            </MenuItem>
            <MenuItem
              onClick={() =>
                handleViewProfile(ActionsMessagingEnum.LOCKED_CHAT)
              }
            >
              Bloquear
            </MenuItem>
          </Menu>
        </Stack>

        <Box overflow="auto" paddingY={2} ref={containerRef} onScroll={handleScroll}>
          <Stack gap={1} paddingX={paddingResponsive} className='container-message'>
            {
              <MessageInfoDay 
                style={{
                  position: 'sticky',
                  zIndex: 100,
                  top: 0,
                  opacity: containerRef.current?.scrollTop ? '1' : '0',
                  transform: dataLabel.active ? 'translateY(0px)' : 'translateY(-50px)',
                  transition: 'transform 0.5s ease, opacity 1s ease',
                }}
              >
              { dataLabel.message }
            </MessageInfoDay>
            }
            {messageInitial.concat(messages).map((el, index) => (
              <MessageItemView {...el} key={index} />
            ))}
          </Stack>
        </Box>

        {
          messageEdit 
          ? <BoxUpdate 
              onUpdateMessage={handleUpdateMessage} 
              message={messageEdit.message}
              batchMessage={messageEdit.batchMessage}
            />
          : <BoxSending 
              onSendMessage={handleSendMessage}
              stateContact={contactData.stateContact}
            />
        }

      </Box>

      <ProfileUserView width={currentView ? { xs: '100%', md: '80%' } : '0%'} />
      <ChatView />
    </>
  );
};
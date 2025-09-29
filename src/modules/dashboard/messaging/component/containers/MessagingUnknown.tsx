import { Avatar, Box, Button, Menu, MenuItem, Stack, Typography } from '@mui/material';
import { FC, useState } from 'react';
import { messageInitial } from '../../messaging-mockups';
import { MessageItemView } from '../../component/messages/MessageView';
import { useHandleActiveProfileUser } from '../../messaging-hooks';
import { ProfileUserView } from '../../profile-user/ProfileUserView';
import { ActionsMessagingEnum, ActiveProfileUserEnum } from '../../messaging-types';
import { paddingResponsive } from '../../messaging-styles';
import { useCallAction } from '@cobuildlab/react-simple-state';
import { ChatView } from '../../component/modals/chat/ChatView';
import { useHandleChangeModalChatType } from '../../component/modals/chat/chat-hooks';
import { ModalsChatEnum } from '../../component/modals/chat/chat-types';
import { fetchMessagingUser } from '@src/modules/dashboard/dashboard-actions';
import { sendFriendRequest } from '../../messaging-actions';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import useAuthContext from '@src/shared/hook/useAuthContext';
import { snackbar } from '@src/shared/component/ui/snackbar/Snackbar';
import { ContactProps } from '@src/shared/types/base/contact/contact-types';

export const MessagingUnknown: FC<{ contactData: ContactProps, clearData: () => void }> = ({ contactData, clearData }) => {
  const { currentView, handleChangeActiveProfileUser } =
    useHandleActiveProfileUser();
  const { handleChangeModalChat } = useHandleChangeModalChatType();
  const { user } = useAuthContext();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void =>
    setAnchorEl(event.currentTarget);
  const handleClose = (): void => setAnchorEl(null);
  const [callLogin] = useCallAction(fetchMessagingUser);
  const [callRequestSent] = useCallAction(sendFriendRequest, {
    onCompleted(resp) {
      snackbar.success(resp.message);
    }, 
    onError(err) {
      snackbar.any({
        message: err.text,
        title: err.title,
        type: err.type
      });
    }
  });

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
  
  const handleRequestSent = (): void => {
    callRequestSent({
      idUserReceived: contactData.idUserContact,
      idUserSend: user.idUser
    });
  };
  
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
                onClick={() => callLogin(0)}
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
            MenuListProps={{ 'aria-labelledby': 'basic-button' }}
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

        <Box overflow="auto" paddingY={2}>
          <Stack gap={1} paddingX={paddingResponsive}>
            {messageInitial.map((el, index) => (
              <MessageItemView {...el} key={index} />
            ))}
          </Stack>
        </Box>

        <Box paddingY={5} paddingX={paddingResponsive}>
          <Stack alignItems="center" gap={1}>
            <Typography component='b' fontWeight='bold'>¿Quieres enviar una solicitud de amistad?</Typography>
            <Button size="large" variant="contained" color="info" onClick={handleRequestSent}>Enviar Solicitud</Button>
          </Stack>
        </Box>
      </Box>

      <ProfileUserView width={currentView ? { xs: '100%', md: '80%' } : '0%'} />
      <ChatView />
    </>
  );
};
import { Avatar, Box, Menu, MenuItem, Stack, Typography } from '@mui/material';
import { FC, PropsWithChildren, useState } from 'react';
import { messagesMockup } from './messaging-mockups';
import { Controls } from '@src/shared/component/Controls';
import { MessageItemView } from './component/message/MessageView';
import { useHandleActiveProfileUser } from './messaging-hooks';
import { ProfileUserView } from './profile-user/ProfileUserView';
import { ActionsMessagingEnum, ActiveProfileUserEnum, MessagesTypesEnum } from './messaging-types';
import { paddingResponsive } from './messaging-styles';
import { useCallAction } from '@cobuildlab/react-simple-state';
import { fetchMessagingUser } from '../dashboard-actions';
import IconButton from '@mui/material/IconButton';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import SendIcon from '@mui/icons-material/Send';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

export const MessageView: FC<PropsWithChildren> = () => {
  const { currentView, handleChangeActiveProfileUser } = useHandleActiveProfileUser();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => setAnchorEl(event.currentTarget);
  const handleClose = (): void => setAnchorEl(null);
  const [callLogin] = useCallAction(fetchMessagingUser);

  const handleViewProfile = (action: ActionsMessagingEnum): void => {
    switch (action) {
      case ActionsMessagingEnum.VIEW_PROFILE:
        handleChangeActiveProfileUser(ActiveProfileUserEnum.PROFILE_USER);
        break;
      default:
        break;
    }

    handleClose();
  };

  return (
    <>
      <Box 
        sx={{ bgcolor: { xs: 'background_colors_opacity.50', md: 'none' } }}
        display="grid" 
        gridTemplateRows="auto 1fr auto" 
        width={1}
        height={1}
        paddingY={1} 
      >
        <Stack flexDirection="row" justifyContent="space-between" alignItems="center" paddingX={paddingResponsive} paddingY={1}>
          <Stack flexDirection="row" alignItems="center" gap={2}>
            <Stack flexDirection="row" alignItems="center" gap={1}>
              <IconButton size='small' color='default' onClick={() => callLogin(undefined)} sx={{ display: { xs: 'block', md: 'none' } }}><KeyboardArrowLeftIcon /></IconButton>
              <Avatar />
            </Stack>
            <Box>
              <Typography fontWeight={700} color="grey.700" fontSize={20}>Esther Ramos</Typography>
              <Typography color="grey.700" fontSize={14}>Activo</Typography>
            </Box>
          </Stack>
          <IconButton 
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            color='default'
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
            <MenuItem onClick={() => handleViewProfile(ActionsMessagingEnum.VIEW_PROFILE)}>Ver Perfil</MenuItem>
            <MenuItem onClick={handleClose}>Vaciar Chat</MenuItem>
            <MenuItem onClick={handleClose}>Eliminar Chat</MenuItem>
            <MenuItem onClick={handleClose}>Cerrar Contacto</MenuItem>
            <MenuItem onClick={handleClose}>Reportar</MenuItem>
            <MenuItem onClick={handleClose}>Bloquear</MenuItem>
          </Menu>
        </Stack>

        <Box overflow="auto" paddingY={2}>
          <Stack gap={1} paddingX={paddingResponsive}>
            {
              messagesMockup.map((el, index) => (
                <MessageItemView { ...el } 
                  typeMessage={MessagesTypesEnum.DOCUMENT}
                  key={index} 
                  userId='1'
                  createdAt={el.createdAt} 
                  state={el.state}
                  isNewDay={el.isNewDay}
                  isEdit={el.isEdit}
                />
              ))
            }
          </Stack>
        </Box>
        
        <Box paddingY={1} paddingX={paddingResponsive}>
          <Stack flexDirection="row" alignItems="flex-end" bgcolor="white.main">
            <IconButton aria-label="Folder"><DriveFolderUploadIcon  /></IconButton>
            <Controls.InputComponent 
              multiline
              variant='primary'
              size='large'
              sx={{ 
                maxHeight: '120px', 
                minHeight: '40px', 
                height: 'auto', 
                overflow: 'auto'
              }}
            />
            <IconButton aria-label="delete"><SendIcon  /></IconButton>
          </Stack>
        </Box>
      </Box>

      <ProfileUserView width={currentView ? { xs: '100%', md: '80%' } : '0%'} />
    </>
  );
};
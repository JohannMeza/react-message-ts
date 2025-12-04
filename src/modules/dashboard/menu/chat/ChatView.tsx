import {
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Tab,
  Tabs,
  Typography,
  Box,
} from '@mui/material';
import { FC, PropsWithChildren, useState } from 'react';
import { MenuTabsEnum } from './chat-types';
import { ContactView } from './contact/ContactView';
import { GroupView } from './group/GroupView';
import { RequestView } from './invitation/InvitationView';
import { useHandleTabsMenu } from './chat-hooks';
import { SearchView } from './search/SearchView';
import { useHandleChangeMenuView } from '../menu-hooks';
import { MenuCurrentViewEnum } from '../menu-types';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import useAuthContext from '@src/shared/hook/useAuthContext';

export const ChatView: FC<PropsWithChildren> = () => {
  const { user } = useAuthContext();
  const { handleChangeMenu } = useHandleChangeMenuView();
  const { tab, handleTabsMenu } = useHandleTabsMenu();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { logout } = useAuthContext();
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void =>
    setAnchorEl(event.currentTarget);
  const handleClose = (): void => {
    setAnchorEl(null);
  };
  const handleChange = (
    _event: React.SyntheticEvent,
    newValue: MenuTabsEnum,
  ): void => handleTabsMenu(newValue);

  const handleOpenMenu = (menuView: MenuCurrentViewEnum): void => {
    handleClose();
    handleChangeMenu(menuView, true);
  };

  const handleNewContact = (menuNewContact: MenuTabsEnum): void => {
    handleTabsMenu(menuNewContact);
    handleClose();
  };

  const MenuTabs: { [key: string]: React.ReactElement } = {
    [MenuTabsEnum.CONTACT]: <ContactView />,
    [MenuTabsEnum.GROUP]: <GroupView />,
    [MenuTabsEnum.REQUEST]: <RequestView />,
    [MenuTabsEnum.SEARCH]: <SearchView />,
  };

  return (
    <Box
      display="grid"
      gridTemplateRows="auto auto 1fr"
      maxHeight={1}
      height={1}
      position="relative"
      overflow="hidden"
    >
      <Stack
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        paddingX={2}
        paddingTop={3}
        paddingBottom={1}
      >
        <Stack flexDirection="row" alignItems="center" gap={2}>
          <Avatar src={user.pathImage} />
          <Typography fontSize={20} fontWeight={800} color="grey.700">
            { user.name }
          </Typography>
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
        >
          <MenuItem onClick={() => handleOpenMenu(MenuCurrentViewEnum.PROFILE)}>
            Mi Perfil
          </MenuItem>
          <MenuItem onClick={() => handleNewContact(MenuTabsEnum.SEARCH)}>
            Agregar Contacto
          </MenuItem>
          <MenuItem
            onClick={() => handleOpenMenu(MenuCurrentViewEnum.NEW_GROUP)}
          >
            Nuevo Grupo
          </MenuItem>
          <MenuItem onClick={() => handleOpenMenu(MenuCurrentViewEnum.SETTING)}>
            Configuración
          </MenuItem>
          <MenuItem onClick={() => logout()}>Cerrar Sesión</MenuItem>
        </Menu>
      </Stack>
      <Tabs
        value={tab}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons={false}
        textColor="primary"
      >
        <Tab label="Contactos" value={MenuTabsEnum.CONTACT} />
        <Tab label="Grupos" value={MenuTabsEnum.GROUP} />
        <Tab label="Solicitudes" value={MenuTabsEnum.REQUEST} />
        <Tab label="Buscar" value={MenuTabsEnum.SEARCH} />
      </Tabs>
      {MenuTabs[tab]}
    </Box>
  );
};

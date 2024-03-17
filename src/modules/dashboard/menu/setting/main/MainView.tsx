import { FC, PropsWithChildren } from 'react';
import { IconButton, Typography, Stack, Avatar } from '@mui/material';
import { useHandleChangeSettingView } from '../setting-hooks';
import { SettingCurrentViewEnum } from '../setting-types';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SecurityIcon from '@mui/icons-material/Security';
import LockIcon from '@mui/icons-material/Lock';
import Brightness6Icon from '@mui/icons-material/Brightness6';
import LogoutIcon from '@mui/icons-material/Logout';
import { useHandleChangeMenuView } from '../../menu-hooks';
import { MenuCurrentViewEnum } from '../../menu-types';
import { ListSettingBox } from '@src/modules/dashboard/component/ContainedBoxView';

export const MainView: FC<PropsWithChildren> = () => {
  const { handleChangeMenu } = useHandleChangeMenuView();
  const { handleChangeSetting } = useHandleChangeSettingView();

  return (
    <>
      <Stack flexDirection="row" alignItems="center" gap={2} padding="10px">
        <IconButton
          onClick={() => handleChangeMenu(MenuCurrentViewEnum.SETTING, false)}
          color="default"
        >
          <NavigateBeforeIcon />
        </IconButton>
        <Typography fontSize={20} fontWeight={700} color="grey.700">
          Configuración
        </Typography>
      </Stack>
      <Stack
        flexDirection="row"
        alignItems="center"
        padding={2}
        gap={2}
        sx={{
          '&:hover': { backgroundColor: 'background_colors_opacity.60' },
          cursor: 'pointer',
          userSelect: 'none',
        }}
        onClick={() =>
          handleChangeSetting(SettingCurrentViewEnum.PROFILE, false)
        }
      >
        <Avatar sx={{ width: 80, height: 80 }} />
        <Stack>
          <Typography fontSize={18} fontWeight={500}>
            Esther Howard
          </Typography>
          <Typography fontSize={16}>Hola esoy usando whatsapp</Typography>
        </Stack>
      </Stack>
      <Stack marginTop={2}>
        <ListSettingBox
          onClick={() =>
            handleChangeSetting(SettingCurrentViewEnum.NOTIFICATION, false)
          }
        >
          <Stack flexDirection="row" gap={2}>
            <NotificationsIcon color="action" />
            <Typography fontSize={16} fontWeight={500} color="grey.700">
              Notificaciones
            </Typography>
          </Stack>
        </ListSettingBox>
        <ListSettingBox
          onClick={() =>
            handleChangeSetting(SettingCurrentViewEnum.SECURITY, false)
          }
        >
          <Stack flexDirection="row" gap={2}>
            <SecurityIcon color="action" />
            <Typography fontSize={16} fontWeight={500} color="grey.700">
              Securidad
            </Typography>
          </Stack>
        </ListSettingBox>
        <ListSettingBox
          onClick={() =>
            handleChangeSetting(SettingCurrentViewEnum.PRIVACITY, false)
          }
        >
          <Stack flexDirection="row" gap={2}>
            <LockIcon color="action" />
            <Typography fontSize={16} fontWeight={500} color="grey.700">
              Privacidad
            </Typography>
          </Stack>
        </ListSettingBox>
        <ListSettingBox>
          <Stack flexDirection="row" gap={2}>
            <Brightness6Icon color="action" />
            <Typography fontSize={16} fontWeight={500} color="grey.700">
              Tema
            </Typography>
          </Stack>
        </ListSettingBox>
        <ListSettingBox>
          <Stack flexDirection="row" gap={2}>
            <LogoutIcon color="error" />
            <Typography fontSize={16} fontWeight={500} color="red.main">
              Cerrar sesión
            </Typography>
          </Stack>
        </ListSettingBox>
      </Stack>
    </>
  );
};

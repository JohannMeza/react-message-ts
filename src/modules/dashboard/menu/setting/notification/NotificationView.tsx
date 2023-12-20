import { Box, Stack, IconButton, Typography, Checkbox } from '@mui/material';
import { FC, PropsWithChildren } from 'react';
import { useHandleChangeSettingView } from '../setting-hooks';
import { SettingCurrentViewEnum } from '../setting-types';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { ListSettingBox } from '@src/modules/dashboard/component/ContainedBoxView';

export const NotificationView: FC<PropsWithChildren> = () => {
  const { handleChangeSetting } = useHandleChangeSettingView();

  return (
    <>
      <Stack flexDirection="row" alignItems="center" gap={2} padding="10px">
        <IconButton 
          onClick={() => handleChangeSetting(SettingCurrentViewEnum.MAIN, false)}
          color='default'
        >
          <NavigateBeforeIcon />
        </IconButton> 
        <Typography fontSize={20} fontWeight={700} color="grey.700">Notificaciones</Typography>
      </Stack>
      <Stack>
        <Typography padding="10px" fontSize={16} fontWeight={600}>Mensajes</Typography>
        <ListSettingBox>
          <Box>
            <Typography fontSize={16} fontWeight={500} color="grey.700">Notificaciones de mensajes</Typography>
            <Typography fontSize={14} color="grey.700">Se muestran notificaciones de mensajes nuevos</Typography>
          </Box>
          <Checkbox />
        </ListSettingBox>
        <ListSettingBox>
          <Box>
            <Typography fontSize={16} fontWeight={500} color="grey.700">Sonidos</Typography>
            <Typography fontSize={14} color="grey.700">Se reproduce un sonido cuando hay mensajes entrantes</Typography>
          </Box>
          <Checkbox />
        </ListSettingBox>
      </Stack>
    </>
  );
};
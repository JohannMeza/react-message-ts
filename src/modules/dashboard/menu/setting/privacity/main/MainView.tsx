import { Stack, IconButton, Typography, Box, Checkbox } from '@mui/material';
import { FC, PropsWithChildren } from 'react';
import { SettingCurrentViewEnum } from '../../setting-types';
import { useHandleChangeSettingView } from '../../setting-hooks';
import { useHandleChangePrivacityView } from '../privacity-hooks';
import { PrivacityCurrentViewEnum } from '../privacity-types';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { ListSettingBox } from '@src/modules/dashboard/component/ContainedBoxView';

export const MainView: FC<PropsWithChildren> = () => {
  const { handleChangeSetting } = useHandleChangeSettingView();
  const { handleChangePrivacity } = useHandleChangePrivacityView();

  return (
    <Box height={1} display="grid" gridTemplateRows="auto 1fr">
      <Stack flexDirection="row" alignItems="center" gap={2} padding="10px">
        <IconButton
          onClick={() =>
            handleChangeSetting(SettingCurrentViewEnum.MAIN, false)
          }
          color="default"
        >
          <NavigateBeforeIcon />
        </IconButton>
        <Typography fontSize={20} fontWeight={700} color="grey.700">
          Privacidad
        </Typography>
      </Stack>
      <Stack height={1} overflow="auto">
        <Box>
          <Typography padding="10px" fontSize={16} fontWeight={600}>
            ¿Quién puede ver mi información personal?
          </Typography>
          <ListSettingBox
            onClick={() =>
              handleChangePrivacity(PrivacityCurrentViewEnum.ONLINE, false)
            }
          >
            <Box>
              <Typography fontSize={16} fontWeight={500} color="grey.700">
                Hora de últ. vez y En Linea
              </Typography>
              <Typography fontSize={14} color="grey.700">
                Todos
              </Typography>
            </Box>
            <ChevronRightIcon />
          </ListSettingBox>
          <ListSettingBox
            onClick={() =>
              handleChangePrivacity(PrivacityCurrentViewEnum.PROFILE, false)
            }
          >
            <Box>
              <Typography fontSize={16} fontWeight={500} color="grey.700">
                Foto de perfil
              </Typography>
              <Typography fontSize={14} color="grey.700">
                Todos
              </Typography>
            </Box>
            <ChevronRightIcon />
          </ListSettingBox>
          <ListSettingBox
            onClick={() =>
              handleChangePrivacity(PrivacityCurrentViewEnum.INFORMATION, false)
            }
          >
            <Box>
              <Typography fontSize={16} fontWeight={500} color="grey.700">
                Info
              </Typography>
              <Typography fontSize={14} color="grey.700">
                Todos
              </Typography>
            </Box>
            <ChevronRightIcon />
          </ListSettingBox>
          <ListSettingBox>
            <Box>
              <Typography fontSize={16} fontWeight={500} color="grey.700">
                Confirmaciones de lectura
              </Typography>
              <Typography fontSize={14} color="grey.700">
                Si desactivas las confirmaciones de lectura, no podrás enviarlas
                ni recibirlas. Las confirmaciones de lectura se enviarán siempre
                en los chats grupales.
              </Typography>
            </Box>
            <Checkbox />
          </ListSettingBox>
        </Box>
        <Box>
          <Typography padding="10px" fontSize={16} fontWeight={600}>
            Chats
          </Typography>
          <ListSettingBox
            onClick={() =>
              handleChangePrivacity(PrivacityCurrentViewEnum.GROUP, false)
            }
          >
            <Box>
              <Typography fontSize={16} fontWeight={500} color="grey.700">
                Grupos
              </Typography>
              <Typography fontSize={14} color="grey.700">
                Todos
              </Typography>
            </Box>
            <ChevronRightIcon />
          </ListSettingBox>
          <ListSettingBox
            onClick={() =>
              handleChangePrivacity(PrivacityCurrentViewEnum.LOCKED, false)
            }
          >
            <Box>
              <Typography fontSize={16} fontWeight={500} color="grey.700">
                Contactos Bloqueados
              </Typography>
              <Typography fontSize={14} color="grey.700">
                4
              </Typography>
            </Box>
            <ChevronRightIcon />
          </ListSettingBox>
        </Box>
      </Stack>
    </Box>
  );
};

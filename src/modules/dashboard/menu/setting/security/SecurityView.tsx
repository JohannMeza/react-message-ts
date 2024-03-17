import { Stack, IconButton, Typography, Box } from '@mui/material';
import { FC, PropsWithChildren } from 'react';
import { useHandleChangeSettingView } from '../setting-hooks';
import { SettingCurrentViewEnum } from '../setting-types';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import SecutityImage from '@src/assets/security.svg';
import MessageIcon from '@mui/icons-material/Message';
import CallIcon from '@mui/icons-material/Call';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import LocationOnIcon from '@mui/icons-material/LocationOn';
export const SecurityView: FC<PropsWithChildren> = () => {
  const { handleChangeSetting } = useHandleChangeSettingView();

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
          Seguridad
        </Typography>
      </Stack>

      <Stack
        padding="10px"
        alignItems="center"
        alignContent="center"
        gap={2}
        height={1}
        overflow="auto"
      >
        <img src={SecutityImage} alt="Security" width="80%" />

        <Box width={1}>
          <Typography fontSize={18} fontWeight={700} color="grey.700">
            Pipedrive protege tu privacidad
          </Typography>
          <Typography fontSize={14} color="grey.700">
            El cifrado de extremo a extremo permite que tus mensajes y llamadas
            personales sean solo para ti y las personas con quienes decidas
            compartirlos, ni siquiera WhatsApp puede leerlos o escucharlos. Este
            cifrado se aplica a lo siguiente:
          </Typography>
        </Box>

        <Stack width={1} gap={1}>
          <Stack flexDirection="row" gap={1}>
            <MessageIcon color="action" />
            <Typography fontSize={14} color="grey.700">
              MenejsMensajes de texto y de voz
            </Typography>
          </Stack>

          <Stack flexDirection="row" gap={1}>
            <CallIcon color="action" />
            <Typography fontSize={14} color="grey.700">
              Llamadas y videollamadas
            </Typography>
          </Stack>

          <Stack flexDirection="row" gap={1}>
            <AttachFileIcon color="action" />
            <Typography fontSize={14} color="grey.700">
              Fotos, videos y documentos
            </Typography>
          </Stack>

          <Stack flexDirection="row" gap={1}>
            <LocationOnIcon color="action" />
            <Typography fontSize={14} color="grey.700">
              Ubicaciones compartidas
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

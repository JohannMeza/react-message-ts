import { FC, PropsWithChildren, useState } from 'react';
import { Stack, IconButton, Typography, Box, Avatar } from '@mui/material';
import { PrivacityCurrentViewEnum } from '../privacity-types';
import { useHandleChangePrivacityView } from '../privacity-hooks';
import { contactsBloquedMockup, contactsMockup } from './locked-mockup';
import { ModalContactsLockedView } from '@src/modules/dashboard/component/ModalContactsLockedView';
import { ListSettingBox } from '@src/modules/dashboard/component/ContainedBoxView';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import CloseIcon from '@mui/icons-material/Close';

export const LockedView: FC<PropsWithChildren> = () => {
  const { handleChangePrivacity } = useHandleChangePrivacityView();
  const [open, setOpen] = useState(false);

  return (
    <Box
      display="grid"
      gridTemplateRows="auto auto auto"
      height={1}
      alignContent="flex-start"
    >
      <ModalContactsLockedView
        open={open}
        setOpen={setOpen}
        contacts={contactsMockup}
      />
      <Stack
        flexDirection="row"
        alignItems="center"
        gap={2}
        padding="10px"
        height="auto"
      >
        <IconButton
          onClick={() =>
            handleChangePrivacity(PrivacityCurrentViewEnum.MAIN, false)
          }
          color="default"
        >
          <NavigateBeforeIcon />
        </IconButton>
        <Typography fontSize={20} fontWeight={700} color="grey.700">
          Contactos Bloqueados
        </Typography>
      </Stack>
      <ListSettingBox onClick={() => setOpen(true)}>
        <Stack flexDirection="row" gap={2}>
          <PersonAddIcon color="action" />
          <Typography fontSize={16} fontWeight={500} color="grey.700">
            Bloquear un contacto
          </Typography>
        </Stack>
      </ListSettingBox>
      <Stack height={1} overflow="auto">
        {contactsBloquedMockup.map((el, index) => (
          <ListSettingBox key={index}>
            <Stack flexDirection="row" gap={2} alignItems="center">
              <Avatar src={el.avatar} />
              <Typography fontSize={16} fontWeight={500} color="grey.700">
                {el.name}
              </Typography>
            </Stack>
            <IconButton color="default">
              <CloseIcon />
            </IconButton>
          </ListSettingBox>
        ))}
      </Stack>
      <Typography
        paddingX="20px"
        paddingY="10px"
        fontSize={14}
        color="grey.700"
        height="auto"
      >
        Los contactos bloqueados ya no podrán enviarte mensajes
      </Typography>
    </Box>
  );
};

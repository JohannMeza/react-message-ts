import { FC, PropsWithChildren, useState } from 'react';
import { Stack, IconButton, Typography, Box, Avatar } from '@mui/material';
import { PrivacityCurrentViewEnum } from '../privacity-types';
import { useHandleChangePrivacityView } from '../privacity-hooks';
import { ModalContactsLockedView } from '@src/modules/dashboard/component/ModalContactsLockedView';
import { ListSettingBox } from '@src/modules/dashboard/component/ContainedBoxView';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import CloseIcon from '@mui/icons-material/Close';
import { blockedContactAction, listContactLockedAction, listContactsNotLockedAction, unblockContactAction } from './locked-actions';
import { useCallAction, useFetchAction } from '@cobuildlab/react-simple-state';
import Swal from 'sweetalert2';
import useAuthContext from '@src/shared/hook/useAuthContext';
import { ContactStates } from '@src/modules/dashboard/dashboard-types';
import { ContactsViewLockedProps } from './locked-types';

export const LockedView: FC<PropsWithChildren> = () => {
  const { user } = useAuthContext();
  const { handleChangePrivacity } = useHandleChangePrivacityView();
  const [open, setOpen] = useState(false);

  const [notContacts, , { refetch }] = useFetchAction(listContactLockedAction, [user.idUser, ContactStates.BLOCKED]);
  const [contacts, , { refetch: refetchContacts }] = useFetchAction(listContactsNotLockedAction, [user.idUser, ContactStates.CONTACT]);

  const [call] = useCallAction(blockedContactAction, {
    onCompleted(res) {
      Swal.fire({
        title: 'Bloqueado',
        text: res.message,
        icon: 'success'
      });

      refetch();
      refetchContacts();
      setOpen(false);
    }
  });

  const [callUnblock] = useCallAction(unblockContactAction, {
    onCompleted(res) {
      Swal.fire({
        title: 'Desbloqueado',
        text: res.message,
        icon: 'success'
      });

      refetch();
      refetchContacts();
    }
  });

  const unblockContact = (contact: ContactsViewLockedProps): void => {
    Swal.fire({
      title: `¿Deseas desbloquear a ${contact.name}?`,
      text: 'Esta persona podrá enviarte mensajes.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, desbloquear contacto',
      cancelButtonText: 'No, cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        callUnblock(contact.idContact);
      }
    });
  };

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
        contacts={contacts}
        callAction={call}
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
        {notContacts.map((el, index) => (
          <ListSettingBox key={index}>
            <Stack flexDirection="row" gap={2} alignItems="center">
              <Avatar src={el.pathImagen} />
              <Typography fontSize={16} fontWeight={500} color="grey.700">
                {el.name}
              </Typography>
            </Stack>
            <IconButton color="default" onClick={() => unblockContact(el)}>
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

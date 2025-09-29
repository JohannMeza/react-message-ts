import { FC } from 'react';
import {
  Avatar,
  Box,
  DialogContent,
  List,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';
import { Controls } from '@src/shared/component/Controls';
import { ListSettingBox } from './ContainedBoxView';
import PersonIcon from '@mui/icons-material/Person';
import Swal from 'sweetalert2';
import { ContactsViewLockedProps } from '../menu/setting/privacity/locked/locked-types';

interface ModalContactsType {
  open: boolean;
  setOpen: (prop: boolean) => void;
  callAction: (idContact: number) => void;
  contacts: ContactsViewLockedProps[]
}

export const ModalContactsLockedView: FC<ModalContactsType> = ({
  open,
  setOpen,
  callAction,
  contacts
}) => {

  const action = (contact: ContactsViewLockedProps): void => {
    setOpen(false);

    Swal.fire({
      title: `¿Deseas bloquear a ${contact.name}?`,
      text: 'Esta persona no podrá enviarte mensajes.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, bloquear contacto',
      cancelButtonText: 'No, cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        callAction(contact.idContact);
        setOpen(true);
      } else {
        setOpen(true);
      }
    });
  };
  console.log(contacts);
  return (
    <Controls.ModalComponent
      open={open}
      setOpen={setOpen}
      title="Bloquear contacto"
      maxWidth="xs"
      fullWidth
    >
      <Box paddingX={2} paddingY={1}>
        <Controls.InputComponent
          variant="primary"
          placeholder="Buscar contacto..."
        />
      </Box>
      <DialogContent variant="none-padding">
        <List sx={{ pt: 0 }}>
          {contacts.map((contact, index) => (
            <ListSettingBox
              sx={{ '&:hover': { backgroundColor: 'grey.100' } }}
              key={index}
              onClick={() => action(contact)}
            >
              <ListItemAvatar>
                <Avatar>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText>
                <Stack direction="column">
                  <Typography color="grey.700" fontSize={16} fontWeight={700}>
                    {contact.name}
                  </Typography>
                  <Typography color="grey.700" fontSize={15}>
                    {contact.description}
                  </Typography>
                </Stack>
              </ListItemText>
            </ListSettingBox>
          ))}
        </List>
      </DialogContent>
    </Controls.ModalComponent>
  );
};

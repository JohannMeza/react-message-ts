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

interface ContactsType {
  avatar: string | null;
  name: string;
  description: string;
}
interface ModalContactsType {
  open: boolean;
  setOpen: (prop: boolean) => void;
  contacts: ContactsType[];
}

export const ModalContactsLockedView: FC<ModalContactsType> = ({
  open,
  setOpen,
  contacts,
}) => (
  <Controls.ModalComponent
    open={open}
    setOpen={setOpen}
    title="Añadir contacto bloqueado"
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

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Divider,
  Typography,
} from '@mui/material';
import { FC } from 'react';
import { ChatModalType } from '../chat-types';

export const ChatModalComponent: FC<ChatModalType> = (props) => (
  <Dialog onClose={props.handleClose} fullWidth open={props.open}>
    <DialogContent variant="default">
      <Typography fontSize={20} fontWeight="500">
        {props.title}
      </Typography>
      <Divider sx={{ marginY: 1 }} />
      {props.children}
    </DialogContent>

    <DialogActions>
      <Button variant="text" onClick={props.handleClose}>
        Volver
      </Button>
      <Button variant="contained" color="error">
        {props.textSuccess}
      </Button>
    </DialogActions>
  </Dialog>
);

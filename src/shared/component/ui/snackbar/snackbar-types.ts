import { AlertColor } from '@mui/material';

export interface SnackbarTypeEvent {
  id?: number;
  type: AlertColor;
  message: string;
  title: string;
}

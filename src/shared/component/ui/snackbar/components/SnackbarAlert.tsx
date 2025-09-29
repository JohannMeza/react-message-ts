import { forwardRef, useState } from 'react';
import { Alert, capitalize, Snackbar, Typography } from '@mui/material';
import { SnackbarTypeEvent } from '../snackbar-types';
import { SnackbarContent } from 'notistack';

export const SnackbarAlert = forwardRef<
  HTMLDivElement,
  { data: SnackbarTypeEvent }
>(({ data, ...rest }, ref) => {
  const [open, setOpen] = useState(true);

  const handleClose = (reason?: string): void => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <Snackbar
      ref={ref}
      open={open}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      autoHideDuration={6000}
      onClose={(e, reason) => handleClose(reason)}
      {...rest}
    >
      <SnackbarContent>
        <Alert color={data.type}>
          <Typography>{capitalize(String(data?.title ?? 'info'))}</Typography>
          <Typography>{data?.message}</Typography>
        </Alert>
      </SnackbarContent>
    </Snackbar>
  );
});

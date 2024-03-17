import { FC, PropsWithChildren } from 'react';
import { Box, Stack, IconButton, Typography, useTheme } from '@mui/material';
import { useHandleChangeProfileUserView } from '../profile-user-hooks';
import { ProfileUserCurrentView } from '../profile-user-types';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

export const DirectMessageView: FC<PropsWithChildren> = () => {
  const { handleChangeProfileUser } = useHandleChangeProfileUserView();
  const theme = useTheme();

  return (
    <Box
      display="grid"
      gridTemplateRows="auto 1fr"
      height={1}
      sx={{ borderLeft: `1px solid ${theme.palette.grey[300]}` }}
    >
      <Stack
        flexDirection="row"
        alignItems="center"
        gap={2}
        padding="22px 10px"
      >
        <IconButton
          onClick={() =>
            handleChangeProfileUser(ProfileUserCurrentView.MAIN, false)
          }
          color="default"
        >
          <NavigateBeforeIcon />
        </IconButton>
        <Typography fontSize={20} fontWeight={700} color="grey.700">
          Mensajes destacados
        </Typography>
      </Stack>

      <Box
        width={1}
        height={1}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Typography color="grey.700" fontSize={16}>
          No hay mensajes destacados
        </Typography>
      </Box>
    </Box>
  );
};

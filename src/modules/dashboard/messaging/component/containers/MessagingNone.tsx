import { Box, Typography, Link, Stack } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { FC, PropsWithChildren } from 'react';

export const MessagingNone: FC<PropsWithChildren> = () => (
  <>
    <Box textAlign="left" p={4} mt={2} sx={{ width: '70%' }} margin={'auto'}>
      
      {/* Nombre y mensaje sobre las estrellas */}
      <Typography variant="h4" color='textPrimary' fontWeight="bold" mb={1}>
        By Johann Meza
      </Typography>

      <Typography variant='h6' color="textSecondary" mb={3}>
        No olvides dejar tu estrellita ⭐ en GitHub, que no cuesta nada y me ayuda un montón.
      </Typography>

      {/* Descripción del proyecto */}
      <Typography variant='h6' color='textSecondary' mb={4}>
        Soy desarrollador Full-Stack y me complace que revises mi proyecto. Dale una mirada con calma, está hecho con cariño y mucho café ☕.
      </Typography>

      {/* Links a repositorios */}
      <Stack spacing={2}>
        <Link
          href="https://github.com/JohannMeza/react-message-ts"
          target="_blank"
          color='info'
          variant='h6'
          underline="hover"
          display="flex"
          alignItems="center"
          gap={1}
        >
          <GitHubIcon /> Frontend (React)
        </Link>

        <Link
          href="https://github.com/JohannMeza/message-back"
          target="_blank"
          color='info'
          variant='h6'
          underline="hover"
          display="flex"
          alignItems="center"
          gap={1}
        >
          <GitHubIcon /> Backend (API)
        </Link>
      </Stack>

    </Box>
  </>
);

import { Box } from '@mui/material';
import { FC, PropsWithChildren } from 'react';
import WelcomeGif from '@src/assets/welcome.gif';

export const MessagingNone: FC<PropsWithChildren> = () => (
  <>
    <Box
      component="img"
      src={WelcomeGif}
      alt="Welcome Gif"
      sx={{
        width: { xs: '100%', md: '35%' }, // 100% en móviles, 50% en desktop
        objectFit: 'contain',
        margin: 'auto',
        display: 'block',
      }}
    />
  </>
);
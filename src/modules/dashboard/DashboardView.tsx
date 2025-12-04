import { Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { FC, PropsWithChildren } from 'react';
import { MessageView } from './messaging/MessagingView';
import { MenuView } from './menu/MenuView';
import { MenuViewDisplay, MessageViewDisplay } from './dashboard-styles';
import { PicturesViewer } from './pictures-viewer/PicturesViewer';
import { LoaderAwait } from '@src/shared/component/ui/loader/Loader';

export const DashboardView: FC<PropsWithChildren> = () => (
  <LoaderAwait timer={1} centered minHeight="100vh" height={'100vh'}>
    <Box padding={{ sx: 0, lg: 3 }} height={'100vh'}>
      <Grid container flexWrap="nowrap" height={1} gap={4}>
        <Grid
          bgcolor="background_colors_opacity.50"
          sx={MenuViewDisplay('1')}
          size={{
            xs: 12,
            lg: 3,
          }}
          position="relative"
          overflow="hidden"
          borderRadius={2}
        >
          <MenuView />
        </Grid>
        <Grid
          sx={MessageViewDisplay('1')}
          borderRadius={2}
          display="flex"
          gap={1}
            size={{
            xs: 12,
            lg: 9,
          }}
        >
          <MessageView /> 
        </Grid>
      </Grid>

      <PicturesViewer />
    </Box>
  </LoaderAwait>
);
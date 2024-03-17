import { Box, Grid } from '@mui/material';
import { FC, PropsWithChildren } from 'react';
import { MessageView } from './messaging/MessagingView';
import { MenuView } from './menu/MenuView';
import { MenuViewDisplay, MessageViewDisplay } from './dashboard-styles';
import { useFetchAction } from '@cobuildlab/react-simple-state';
import { fetchMessagingUser } from './dashboard-actions';
import { PicturesViewer } from './pictures-viewer/PicturesViewer';

export const MessagingView: FC<PropsWithChildren> = () => {
  const [data] = useFetchAction(fetchMessagingUser, [undefined]);
  return (
    <Box padding={{ sx: 0, lg: 3 }} height={1}>
      <Grid container flexWrap="nowrap" height={1} gap={4}>
        <Grid
          bgcolor="background_colors_opacity.50"
          sx={MenuViewDisplay(data.id)}
          position="relative"
          overflow="hidden"
          borderRadius={2}
          xs={12}
          lg={3}
          item
        >
          <MenuView />
        </Grid>
        <Grid
          sx={MessageViewDisplay(data.id)}
          borderRadius={2}
          display="flex"
          gap={1}
          xs={12}
          lg={9}
          item
        >
          <MessageView />
        </Grid>
      </Grid>

      <PicturesViewer />
    </Box>
  );
};

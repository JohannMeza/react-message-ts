import { FC, PropsWithChildren } from 'react';
import { Box, Stack, IconButton, Typography, useTheme, Tabs, Tab } from '@mui/material';
import { useHandleChangeProfileUserView } from '../profile-user-hooks';
import { ProfileUserCurrentView } from '../profile-user-types';
import { MultimediaView } from './multimedia/MultimediaView';
import { FileCurrentViewEnum } from './file-types';
import { DocumentView } from './document/DocumentView';
import { LinkView } from './link/LinkView';
import { useHandleChangeFileView } from './file-hooks';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

export const FileView: FC<PropsWithChildren> = () => { 
  const { handleChangeProfileUser } = useHandleChangeProfileUserView();
  const { handleChangeFile, currentView } = useHandleChangeFileView();
  const handleChange = (_event: React.SyntheticEvent, newValue: FileCurrentViewEnum): void => handleChangeFile(newValue);
  console.log(currentView);
  const theme = useTheme();

  const FileViewCurrent = {
    [FileCurrentViewEnum.MULTIMEDIA]: <MultimediaView />,
    [FileCurrentViewEnum.DOCUMENT]: <DocumentView />,
    [FileCurrentViewEnum.LINK]: <LinkView />,
  };

  return (
    <Box 
      display="grid" 
      gridTemplateRows="auto 1fr" 
      height={1} 
      sx={{ borderLeft: `1px solid ${theme.palette.grey[300]}` }}
      padding="22px 10px"
    >
      <Stack flexDirection="row" alignItems="center" gap={2}>
        <IconButton 
          onClick={() => handleChangeProfileUser(ProfileUserCurrentView.MAIN, false)}
          color='default'
        >
          <NavigateBeforeIcon />
        </IconButton> 
        <Typography fontSize={20} fontWeight={700} color="grey.700">Historial de archivos</Typography>
      </Stack>

      <Box>
        <Tabs
          value={currentView}
          variant="scrollable"
          onChange={handleChange}
          scrollButtons={false}
          textColor="primary"
        >
          <Tab label="Archivos Multimedia" value={FileCurrentViewEnum.MULTIMEDIA} />
          <Tab label="Documentos" value={FileCurrentViewEnum.DOCUMENT} />
          <Tab label="Enlaces" value={FileCurrentViewEnum.LINK} />
        </Tabs>

        { FileViewCurrent[currentView] }
      </Box>
    </Box>
  );
};
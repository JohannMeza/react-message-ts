import { FC } from 'react';
import { useHandleChangeProfileUserView } from './profile-user-hooks';
import { ProfileUserCurrentView } from './profile-user-types';
import { Box } from '@mui/material';
import { MainView } from './main/MainView';
import { DirectMessageView } from './direct-message/DirectMessageView';
import { FileView } from './file/FileView';
import { ContainedView } from '../../component/ContainedBoxView';

export const ProfileUserView: FC<{
  width: { xs: string; md: string } | string;
}> = ({ width }) => {
  const { currentView, position } = useHandleChangeProfileUserView();

  const ProfileViewCurrentView = {
    [ProfileUserCurrentView.MAIN]: <MainView />,
    [ProfileUserCurrentView.DIRECT_MESSAGE]: <DirectMessageView />,
    [ProfileUserCurrentView.FILE]: <FileView />,
  };

  return (
    <Box
      minHeight={1}
      height={1}
      overflow="hidden"
      position={{ xs: 'absolute', md: 'relative' }}
      zIndex={10000}
      sx={{
        textWrap: 'nowrap',
        transition: 'width ease .2s',
        width,
      }}
    >
      <ContainedView
        moveposition={position}
        children={ProfileViewCurrentView[currentView]}
      />
    </Box>
  );
};

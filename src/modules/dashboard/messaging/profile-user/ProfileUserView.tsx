import { FC, useEffect } from 'react';
import { useHandleChangeProfileUserView } from './profile-user-hooks';
import { ProfileUserCurrentView } from './profile-user-types';
import { Box } from '@mui/material';
import { MainView } from './main/MainView';
import { DirectMessageView } from './direct-message/DirectMessageView';
import { FileView } from './file/FileView';
import { ContainedView } from '../../component/ContainedBoxView';
import { useCallAction, useEvent } from '@cobuildlab/react-simple-state';
import { contactDataEvent, groupDataEvent } from '../../dashboard-events';
import { fetchProfileMessaging } from './profile-user-actions';
import { MessagingContainer } from '../messaging-types';
import useAuthContext from '@src/shared/hook/useAuthContext';

export const ProfileUserView: FC<{
  width: { xs: string; md: string } | string;
}> = ({ width }) => {
  const { user } = useAuthContext();
  const contactData = useEvent(contactDataEvent);
  const groupData = useEvent(groupDataEvent);
  const { currentView, position } = useHandleChangeProfileUserView();
  const [callProfileMessaging] = useCallAction(fetchProfileMessaging, {
    onCompleted: (resp) => {
      console.log(resp);
    }
  });

  const ProfileViewCurrentView = {
    [ProfileUserCurrentView.MAIN]: <MainView />,
    [ProfileUserCurrentView.DIRECT_MESSAGE]: <DirectMessageView />,
    [ProfileUserCurrentView.FILE]: <FileView />,
  };

  useEffect(() => {
    if (groupData.idGroup || contactData.idUserContact) {
      callProfileMessaging({
        typeMessaging: groupData.idGroup ? MessagingContainer.GROUP : MessagingContainer.CONTACT,
        idGroup: groupData.idGroup,
        idGroupMember: groupData.idGroupMember,
        idUser: user.idUser,
        idUserContact: contactData.idUserContact
      });
    }

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [groupData.idGroup, contactData.idUserContact]);

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

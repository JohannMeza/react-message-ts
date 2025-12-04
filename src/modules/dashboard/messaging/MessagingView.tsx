import { FC, PropsWithChildren } from 'react';
import { MessagingContact } from './component/containers/MessagingContact';
import { MessagingContainer } from './messaging-types';
import { MessagingUnknown } from './component/containers/MessagingUnknown';
import { useEvent } from '@cobuildlab/react-simple-state';
import { messagingContainerActiveEvent } from './messaging-events';
import { MessagingNone } from './component/containers/MessagingNone';
import { MessagingGroup } from './component/containers/MessagingGroup';

export const MessageView: FC<PropsWithChildren> = () => {
  const typeMessaging = useEvent(messagingContainerActiveEvent);
  
  const MessagingBox: { [key: string]: React.ReactElement } = {
    [MessagingContainer.CONTACT]: <MessagingContact />,
    [MessagingContainer.GROUP]: <MessagingGroup />,
    [MessagingContainer.UNKNOWN]: <MessagingUnknown />,
    [MessagingContainer.NONE]: <MessagingNone />,
  };
  
  return (
    <>
      { MessagingBox[typeMessaging.typeMessagingContainer] }
    </>
  );
};

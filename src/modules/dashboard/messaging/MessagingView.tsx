import { FC } from 'react';
import { MessagingContact } from './component/containers/MessagingContact';
import { MessagesType, MessagingContainer } from './messaging-types';
import { MessagingUnknown } from './component/containers/MessagingUnknown';
import { ContactProps } from '@src/shared/types/base/contact/contact-types';

export const MessageView: FC<{ 
  contactData: ContactProps, 
  clearData: () => void,
  messages: MessagesType[]
}> = ({ contactData, clearData, messages }) => {
  
  const MessagingBox: { [key: string]: React.ReactElement } = {
    [MessagingContainer.CONTACT]: <MessagingContact contactData={contactData} messages={messages} clearData={clearData} />,
    [MessagingContainer.UNKNOWN]: <MessagingUnknown contactData={contactData} clearData={clearData} />,
  };
  
  return (
    <>
      { MessagingBox[contactData.typeContact] }
    </>
  );
};

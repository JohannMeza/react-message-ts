import { ReactNode } from 'react';
import { MessagesTypesEnum } from '../../messaging-types';
import { MessageLockedBox, MessageInfoBox, MessageNormalBox, MessageNotificationBox, MessageMediaLinkBox, MessageMediaDocumentBox, MessageMediaPreviewBox, MessageMediaBox } from './component/MessageTypes';
// import { MessageStateEnum } from '../../../dashboard-types';
// import { DocumentType } from './message-types';
type FirebaseObjectToDataType<T> = T;

// interface MessageItemType {
//   id: string
//   name: string
//   message: string
//   sendId: string
//   receivedId: string
//   createdAt: number
//   userId: string
//   isEdit: boolean
//   state: MessageStateEnum
//   typeMessage: MessagesTypesEnum
//   isNewDay: boolean
//   fileName: string
//   typeFile: DocumentType
//   url: string
// }
interface MessageComponentProps {
  [MessagesTypesEnum.NORMAL]: ReactNode;
  [MessagesTypesEnum.INFO]: ReactNode;
  [MessagesTypesEnum.LOCKED]: ReactNode;
  [MessagesTypesEnum.NOTIFICATION]: ReactNode;
  [MessagesTypesEnum.MEDIA]: ReactNode;
  [MessagesTypesEnum.MEDIA_PREVIEW]: ReactNode;
  [MessagesTypesEnum.DOCUMENT]: ReactNode;
  [MessagesTypesEnum.LINK]: ReactNode;
}
// eslint-disable-next-line @typescript-eslint/ban-types
export const MessageItemView = <T extends { [key: string]: ReactNode }>(props: FirebaseObjectToDataType<T>): ReactNode => {
  const typesMessages: MessageComponentProps = {
    [MessagesTypesEnum.NORMAL]: <MessageNormalBox { ...props } />,
    [MessagesTypesEnum.INFO]: <MessageInfoBox  { ...props } />,
    [MessagesTypesEnum.LOCKED]: <MessageLockedBox  { ...props } />,
    [MessagesTypesEnum.NOTIFICATION]: <MessageNotificationBox  { ...props } />,
    [MessagesTypesEnum.LINK]: <MessageMediaLinkBox  { ...props } />,
    [MessagesTypesEnum.DOCUMENT]: <MessageMediaDocumentBox  { ...props } />,
    [MessagesTypesEnum.MEDIA]: <MessageMediaBox  { ...props } />,
    [MessagesTypesEnum.MEDIA_PREVIEW]: <MessageMediaPreviewBox  { ...props } />,
  };

  return typesMessages[props.typeMessage];
};
import { ReactNode } from 'react';
import { MessagesTypesEnum } from '../../messaging-types';
import {
  MessageLockedBox,
  MessageInfoBox,
  MessageNormalBox,
  MessageNotificationBox,
  MessageMediaPreviewBox,
  MessageMediaBox,
  MessageLinkBox,
  MessageDocumentBox,
} from './component/MessageTypes';
import { MessageComponentProps, MessageItemType } from './message-types';

export const MessageItemView = <T extends MessageItemType>(
  props: T,
): ReactNode => {
  const typesMessages: MessageComponentProps = {
    [MessagesTypesEnum.NORMAL]: MessageNormalBox,
    [MessagesTypesEnum.INFO]: MessageInfoBox,
    [MessagesTypesEnum.LOCKED]: MessageLockedBox,
    [MessagesTypesEnum.NOTIFICATION]: MessageNotificationBox,
    [MessagesTypesEnum.LINK]: MessageLinkBox,
    [MessagesTypesEnum.DOCUMENT]: MessageDocumentBox,
    [MessagesTypesEnum.MEDIA]: MessageMediaBox,
    [MessagesTypesEnum.MEDIA_PREVIEW]: MessageMediaPreviewBox,
  };
  
  const ComponentTest = typesMessages[props.typeMessage];
  return <ComponentTest {...props} />;
};

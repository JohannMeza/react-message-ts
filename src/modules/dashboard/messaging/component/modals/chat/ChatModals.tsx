import { FC } from 'react';
import { ChatModalType } from './chat-types';
import { ChatModalComponent } from './component/ChatModalComponent';

export const ClearChatModal: FC<ChatModalType> = (props) => (
  <ChatModalComponent {...props}>
    Esta conversacion quedará vacia, pero permanecera en tu lista de contactos
  </ChatModalComponent>
);

export const DeleteChatModal: FC<ChatModalType> = (props) => (
  <ChatModalComponent {...props}>
    Este contacto se eliminara de tu lista de contactos, pero seguiras viendo en
    tu lista de amigos.
  </ChatModalComponent>
);

export const ReportChatModal: FC<ChatModalType> = (props) => (
  <ChatModalComponent {...props}>
    Este contacto será reportado, se revisará los últimos 5 mensajes de este
    contacto. No se notificará al contacto sobre esto.
  </ChatModalComponent>
);

export const LockChatModal: FC<ChatModalType> = (props) => (
  <ChatModalComponent {...props}>
    Los Contactos bloqueados no podran llamarte ni enviarte mensaje, No se
    notificará a este contacto sobre eso.
  </ChatModalComponent>
);

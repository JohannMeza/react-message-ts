import { FC, PropsWithChildren } from 'react';
import {
  ClearChatModal,
  DeleteChatModal,
  LockChatModal,
  ReportChatModal,
} from './ChatModals';
import { useHandleChangeModalChatType } from './chat-hooks';
import { ModalsChatEnum } from './chat-types';

export const ChatView: FC<PropsWithChildren> = () => {
  const { modalActive, handleChangeModalChat } = useHandleChangeModalChatType();
  const handleCloseModal = (): void => {
    handleChangeModalChat(ModalsChatEnum.NONE);
  };

  return (
    <>
      <LockChatModal
        handleClose={handleCloseModal}
        title="¿Deseas bloquear a Esther"
        open={ModalsChatEnum.LOCKED_CHAT === modalActive}
        textSuccess="Bloquear"
        handleSuccess={() => {}}
      />
      <DeleteChatModal
        handleClose={handleCloseModal}
        title="¿Deseas eliminar este contacto?"
        open={ModalsChatEnum.DELETE_CHAT === modalActive}
        textSuccess="Eliminar"
        handleSuccess={() => {}}
      />
      <ClearChatModal
        handleClose={handleCloseModal}
        title="¿Deseas eliminar todos los mensajes?"
        open={ModalsChatEnum.CLEAR_CHAT === modalActive}
        textSuccess="Limpiar"
        handleSuccess={() => {}}
      />
      <ReportChatModal
        handleClose={handleCloseModal}
        title="¿Deseas reportar este contacto?"
        open={ModalsChatEnum.REPORT_CHAT === modalActive}
        textSuccess="Reportar"
        handleSuccess={() => {}}
      />
    </>
  );
};

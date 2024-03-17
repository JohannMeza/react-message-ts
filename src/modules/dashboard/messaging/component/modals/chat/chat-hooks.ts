import { useEvent } from '@cobuildlab/react-simple-state';
import { ModalsChatEnum } from './chat-types';
import { activeModalChatViewEvent } from './chat-events';

interface HandleChangeActiveModalChatType {
  modalActive: ModalsChatEnum;
  handleChangeModalChat: (menuView: ModalsChatEnum) => void;
}

export const useHandleChangeModalChatType =
  (): HandleChangeActiveModalChatType => {
    const currentView = useEvent(activeModalChatViewEvent);

    const handleChangeModalChat = (menuView: ModalsChatEnum): void => {
      activeModalChatViewEvent.dispatch({ view: menuView });
    };

    return {
      modalActive: currentView.view,
      handleChangeModalChat,
    };
  };

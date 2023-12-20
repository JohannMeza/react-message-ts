import { useEvent } from '@cobuildlab/react-simple-state';
import { MenuCurrentViewEnum } from './menu-types';
import { menuCurrentViewEvent } from './menu-events';

interface HandleChangeViewType {
  handleChangeMenu: (menuView: MenuCurrentViewEnum, isOpen: boolean) => void 
  currentView: MenuCurrentViewEnum
  position: string
}

export const useHandleChangeMenuView = (): HandleChangeViewType => {
  const currentView = useEvent(menuCurrentViewEvent);

  const handleChangeMenu = (menuView: MenuCurrentViewEnum, isOpen: boolean): void => {
    if (!isOpen) setTimeout(() => menuCurrentViewEvent.dispatch({ view: MenuCurrentViewEnum.CHAT, position: '-100%' }), 200);
    menuCurrentViewEvent.dispatch({ view: menuView, position: isOpen ? '0%' : '-100%' });
  };
  
  return {
    currentView: currentView.view,
    position: currentView.position,
    handleChangeMenu
  };
};
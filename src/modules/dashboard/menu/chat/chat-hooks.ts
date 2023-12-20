import { useEvent } from '@cobuildlab/react-simple-state';
import { tabsMenuEvent } from './chat-events';
import { MenuTabsEnum } from './chat-types';

interface HandleTabsMenuType {
  tab: MenuTabsEnum
  handleTabsMenu: (prop: MenuTabsEnum) => void
}

export const useHandleTabsMenu = (): HandleTabsMenuType => {
  const currentTab = useEvent(tabsMenuEvent);
  const handleTabsMenu = (tabClick: MenuTabsEnum): void => tabsMenuEvent.dispatch(tabClick);
  return { tab: currentTab, handleTabsMenu };
};
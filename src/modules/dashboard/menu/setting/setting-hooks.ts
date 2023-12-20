import { useEvent } from '@cobuildlab/react-simple-state';
import { SettingCurrentViewEnum } from './setting-types';
import { settingCurrentViewEvent } from './setting-events';

interface HandleChangeViewType {
  handleChangeSetting: (menuView: SettingCurrentViewEnum, isOpen: boolean) => void 
  currentView: SettingCurrentViewEnum
  position: string
}

export const useHandleChangeSettingView = (): HandleChangeViewType => {
  const currentView = useEvent(settingCurrentViewEvent);

  const handleChangeSetting = (menuView: SettingCurrentViewEnum, isOpen: boolean): void => {
    settingCurrentViewEvent.dispatch({ view: currentView.view, position: isOpen ? '0%' : '-100%' });
    setTimeout(() => settingCurrentViewEvent.dispatch({ view: menuView, position: '0%' }), 200);
  };
  
  return {
    currentView: currentView.view,
    position: currentView.position,
    handleChangeSetting
  };
};
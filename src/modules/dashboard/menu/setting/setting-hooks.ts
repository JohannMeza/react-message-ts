import { useEvent } from '@cobuildlab/react-simple-state';
import { SettingCurrentViewEnum, SettingBoxType } from './setting-types';
import { propsCurrentViewEvent, settingCurrentViewEvent } from './setting-events';

interface HandleChangeViewType {
  handleChangeSetting: (
    menuView: SettingCurrentViewEnum,
    isOpen: boolean,
  ) => void;
  currentView: SettingCurrentViewEnum;
  position: string;
  props: SettingBoxType
  handleChangeProps: (item: SettingBoxType) => void
}

export const useHandleChangeSettingView = (): HandleChangeViewType => {
  const currentView = useEvent(settingCurrentViewEvent);
  const propsView = useEvent(propsCurrentViewEvent);

  const handleChangeSetting = (
    menuView: SettingCurrentViewEnum,
    isOpen: boolean,
  ): void => {
    settingCurrentViewEvent.dispatch({
      view: currentView.view,
      position: isOpen ? '0%' : '-100%',
    });
    setTimeout(
      () =>
        settingCurrentViewEvent.dispatch({ view: menuView, position: '0%' }),
      200,
    );
  };

  const handleChangeProps = (item: SettingBoxType): void => {
    propsCurrentViewEvent.dispatch(item);
  };
  
  return {
    currentView: currentView.view,
    position: currentView.position,
    handleChangeSetting,
    props: propsView,
    handleChangeProps
  };
};

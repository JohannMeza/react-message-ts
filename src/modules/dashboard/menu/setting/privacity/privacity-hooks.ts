import { useEvent } from '@cobuildlab/react-simple-state';
import { PrivacityCurrentViewEnum } from './privacity-types';
import { privacityCurrentViewEvent } from './privacity-events';

interface HandleChangeViewType {
  handleChangePrivacity: (
    menuView: PrivacityCurrentViewEnum,
    isOpen: boolean,
  ) => void;
  currentView: PrivacityCurrentViewEnum;
  position: string;
}

export const useHandleChangePrivacityView = (): HandleChangeViewType => {
  const currentView = useEvent(privacityCurrentViewEvent);

  const handleChangePrivacity = (
    menuView: PrivacityCurrentViewEnum,
    isOpen: boolean,
  ): void => {
    privacityCurrentViewEvent.dispatch({
      view: currentView.view,
      position: isOpen ? '0%' : '-100%',
    });
    setTimeout(
      () =>
        privacityCurrentViewEvent.dispatch({ view: menuView, position: '0%' }),
      200,
    );
  };

  return {
    currentView: currentView.view,
    position: currentView.position,
    handleChangePrivacity,
  };
};

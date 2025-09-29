import { useEvent } from '@cobuildlab/react-simple-state';
import { PrivacityCurrentViewEnum, PrivacyBoxType } from './privacity-types';
import { privacityCurrentViewEvent, propsPrivacyCurrentViewEvent } from './privacity-events';

interface HandleChangeViewType {
  handleChangePrivacity: (
    menuView: PrivacityCurrentViewEnum,
    isOpen: boolean,
  ) => void;
  handleChangeProps: (props: PrivacyBoxType) => void
  currentView: PrivacityCurrentViewEnum;
  props: PrivacyBoxType;
  position: string;
}

export const useHandleChangePrivacityView = (): HandleChangeViewType => {
  const props = useEvent(propsPrivacyCurrentViewEvent);
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

  const handleChangeProps = (item: PrivacyBoxType): void => {
    propsPrivacyCurrentViewEvent.dispatch(item);
  };

  return {
    currentView: currentView.view,
    position: currentView.position,
    props,
    handleChangePrivacity,
    handleChangeProps,
  };
};

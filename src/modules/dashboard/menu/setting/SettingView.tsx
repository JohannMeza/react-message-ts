// import { FC, PropsWithChildren } from 'react';
import { MainView } from './main/MainView';
import { SettingComponentProps, SettingCurrentViewEnum, SettingBoxType } from './setting-types';
import { NotificationView } from './notification/NotificationView';
import { PrivacityView } from './privacity/PrivacityView';
import { ProfileView } from '../profile/ProfileView';
import { SecurityView } from './security/SecurityView';
import { useHandleChangeSettingView } from './setting-hooks';
import { ContainedView } from '../../component/ContainedBoxView';
// import { useFetchAction } from '@cobuildlab/react-simple-state';
// import { listSettingActions } from './setting-actions';
// import useAuthContext from '@src/shared/hook/useAuthContext';

export const SettingView = <T extends SettingBoxType>(
  { props }: T,
): React.ReactElement => {
  const { currentView, position } = useHandleChangeSettingView();
  // const handleActionProfile = (): void => handleChangeSetting(SettingCurrentViewEnum.MAIN, false);

  const MenuViewCurrent: SettingComponentProps = {
    [SettingCurrentViewEnum.MAIN]: MainView,
    [SettingCurrentViewEnum.NOTIFICATION]: NotificationView,
    [SettingCurrentViewEnum.PRIVACITY]: PrivacityView,
    [SettingCurrentViewEnum.PROFILE]: ProfileView,
    [SettingCurrentViewEnum.SECURITY]: SecurityView,
    // [SettingCurrentViewEnum.THEME]: <></>,
  };
  const ComponentsView = MenuViewCurrent[currentView];
  
  return (
    <>
      <ContainedView
        moveposition={position}
      >
        <ComponentsView { ...props } />
      </ContainedView>
    </>
  );
};

import { FC, PropsWithChildren } from 'react';
import { MainView } from './main/MainView';
import { SettingCurrentViewEnum } from './setting-types';
import { NotificationView } from './notification/NotificationView';
import { PrivacityView } from './privacity/PrivacityView';
import { ProfileView } from '../profile/ProfileView';
import { SecurityView } from './security/SecurityView';
import { useHandleChangeSettingView } from './setting-hooks';
import { ContainedView } from '../../component/ContainedBoxView';

export const SettingView: FC<PropsWithChildren> = () => {
  const { currentView, position, handleChangeSetting } =
    useHandleChangeSettingView();
  const handleActionProfile = (): void =>
    handleChangeSetting(SettingCurrentViewEnum.MAIN, false);

  const MenuViewCurrent = {
    [SettingCurrentViewEnum.MAIN]: <MainView />,
    [SettingCurrentViewEnum.NOTIFICATION]: <NotificationView />,
    [SettingCurrentViewEnum.PRIVACITY]: <PrivacityView />,
    [SettingCurrentViewEnum.PROFILE]: (
      <ProfileView handleClickBack={handleActionProfile} />
    ),
    [SettingCurrentViewEnum.SECURITY]: <SecurityView />,
  };

  return (
    <>
      <ContainedView
        moveposition={position}
        children={MenuViewCurrent[currentView]}
      />
    </>
  );
};

import { FC, PropsWithChildren } from 'react';
import { MainView } from './main/MainView';
import { useHandleChangePrivacityView } from './privacity-hooks';
import { GroupView } from './group/GroupView';
import { InformationView } from './information/InformationView';
import { ProfileView } from './profile/ProfileView';
import { OnlineView } from './online/OnlineView';
import { LockedView } from './locked/LockedView';
import { PrivacityCurrentViewEnum } from './privacity-types';
import { ContainedView } from '@src/modules/dashboard/component/ContainedBoxView';

export const PrivacityView: FC<PropsWithChildren> = () => {
  const { currentView, position } = useHandleChangePrivacityView();

  const PrivacityViewCurrent = {
    [PrivacityCurrentViewEnum.MAIN]: <MainView />,
    [PrivacityCurrentViewEnum.GROUP]: <GroupView />,
    [PrivacityCurrentViewEnum.INFORMATION]: <InformationView />,
    [PrivacityCurrentViewEnum.LOCKED]: <LockedView />,
    [PrivacityCurrentViewEnum.ONLINE]: <OnlineView />,
    [PrivacityCurrentViewEnum.PROFILE]: <ProfileView />,
  };
  
  return (
    <>
      <ContainedView moveposition={position} children={PrivacityViewCurrent[currentView]} />
    </>
  );
};
import { MainView } from './main/MainView';
import { useHandleChangePrivacityView } from './privacity-hooks';
import { GroupView } from './group/GroupView';
import { InformationView } from './information/InformationView';
import { ProfileView } from './profile/ProfileView';
import { OnlineView } from './online/OnlineView';
import { LockedView } from './locked/LockedView';
import { ItemPrivacyComponents, PrivacityCurrentViewEnum } from './privacity-types';
import { ContainedView } from '@src/modules/dashboard/component/ContainedBoxView';
import { SettingPrivacyView } from '../setting-types';

export const PrivacityView = <T extends SettingPrivacyView>(
  props: T,
): React.ReactElement => {
  const { currentView, position, props: propsPrivacy } = useHandleChangePrivacityView();

  const PrivacityViewCurrent: ItemPrivacyComponents = {
    [PrivacityCurrentViewEnum.MAIN]: MainView,
    [PrivacityCurrentViewEnum.GROUP]: GroupView,
    [PrivacityCurrentViewEnum.INFORMATION]: InformationView,
    [PrivacityCurrentViewEnum.LOCKED]: LockedView,
    [PrivacityCurrentViewEnum.ONLINE]: OnlineView,
    [PrivacityCurrentViewEnum.PROFILE]: ProfileView,
  };

  const ComponentsView = PrivacityViewCurrent[currentView];

  return (
    <>
      <ContainedView
        moveposition={position}
        children={<ComponentsView { ...propsPrivacy } title={props.title} />}
      />
    </>
  );

};
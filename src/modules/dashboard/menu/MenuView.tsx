import { FC, PropsWithChildren, useEffect } from 'react';
import { ProfileView } from './profile/ProfileView';
import { NewGroupView } from './group/NewGroupView';
import { SettingView } from './setting/SettingView';
import { MenuCurrentViewEnum } from './menu-types';
import { useHandleChangeMenuView } from './menu-hooks';
import { ContainedView } from '../component/ContainedBoxView';
import { ChatView } from './chat/ChatView';
import { useFetchAction } from '@cobuildlab/react-simple-state';
import { listSettingActions } from './setting/setting-actions';
import { useHandleChangeSettingView } from './setting/setting-hooks';
import useAuthContext from '@src/shared/hook/useAuthContext';
import { SettingCurrentViewEnum, SettingBoxType } from './setting/setting-types';

export const MenuView: FC<PropsWithChildren> = () => {
  const { currentView, position } = useHandleChangeMenuView();
  const { currentView: settingView, handleChangeProps, props } = useHandleChangeSettingView();
  
  const { user } = useAuthContext();

  const [, , { refetch }] = useFetchAction(listSettingActions, [user.idUser], {
    onCompleted(data) {
      handleChangeProps({
        props: {
          data: data,
        }
      } as SettingBoxType);
    }
  });

  const MenuViewCurrent = {
    [MenuCurrentViewEnum.NEW_GROUP]: <NewGroupView />,
    [MenuCurrentViewEnum.PROFILE]: <ProfileView />,
    [MenuCurrentViewEnum.SETTING]: <SettingView {...props} />,
    [MenuCurrentViewEnum.CHAT]: null,
  };

  useEffect(() => {
    if (settingView === SettingCurrentViewEnum.MAIN) {
      refetch();
    }
  }, [refetch, settingView]);

  return (
    <>
      <ChatView />
      <ContainedView
        moveposition={position}
        children={MenuViewCurrent[currentView]}
      />
    </>
  );
};

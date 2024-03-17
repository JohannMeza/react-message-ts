import { FC, PropsWithChildren } from 'react';
import { ProfileView } from './profile/ProfileView';
import { NewGroupView } from './group/NewGroupView';
import { SettingView } from './setting/SettingView';
import { MenuCurrentViewEnum } from './menu-types';
import { useHandleChangeMenuView } from './menu-hooks';
import { ContainedView } from '../component/ContainedBoxView';
import { ChatView } from './chat/ChatView';

export const MenuView: FC<PropsWithChildren> = () => {
  const { currentView, position, handleChangeMenu } = useHandleChangeMenuView();
  const handleActionProfile = (): void =>
    handleChangeMenu(MenuCurrentViewEnum.PROFILE, false);

  const MenuViewCurrent = {
    [MenuCurrentViewEnum.NEW_GROUP]: <NewGroupView />,
    [MenuCurrentViewEnum.PROFILE]: (
      <ProfileView handleClickBack={handleActionProfile} />
    ),
    [MenuCurrentViewEnum.SETTING]: <SettingView />,
    [MenuCurrentViewEnum.CHAT]: null,
  };

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

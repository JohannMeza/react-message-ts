import { useEvent } from '@cobuildlab/react-simple-state';
import { profileUserCurrentViewEvent } from './profile-user-events';
import { ProfileUserCurrentView } from './profile-user-types';

interface HandleChangeProfileUserType {
  handleChangeProfileUser: (
    menuView: ProfileUserCurrentView,
    isOpen: boolean,
  ) => void;
  currentView: ProfileUserCurrentView;
  position: string;
}

export const useHandleChangeProfileUserView =
  (): HandleChangeProfileUserType => {
    const currentView = useEvent(profileUserCurrentViewEvent);

    const handleChangeProfileUser = (
      menuView: ProfileUserCurrentView,
      isOpen: boolean,
    ): void => {
      profileUserCurrentViewEvent.dispatch({
        view: currentView.view,
        position: isOpen ? '0%' : '100%',
      });
      setTimeout(
        () =>
          profileUserCurrentViewEvent.dispatch({
            view: menuView,
            position: '0%',
          }),
        200,
      );
    };

    return {
      currentView: currentView.view,
      position: currentView.position,
      handleChangeProfileUser,
    };
  };

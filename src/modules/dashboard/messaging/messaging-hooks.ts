import { useEvent } from '@cobuildlab/react-simple-state';
import { ActiveProfileUserEnum } from './messaging-types';
import { activeProfileUserViewEvent } from './messaging-events';

interface HandleChangeActiveProfileUserType {
  currentView: ActiveProfileUserEnum;
  handleChangeActiveProfileUser: (menuView: ActiveProfileUserEnum) => void;
}

export const useHandleActiveProfileUser =
  (): HandleChangeActiveProfileUserType => {
    const currentView = useEvent(activeProfileUserViewEvent);
    const handleChangeActiveProfileUser = (
      menuView: ActiveProfileUserEnum,
    ): void => {
      activeProfileUserViewEvent.dispatch({ view: menuView });
    };

    return {
      currentView: currentView.view,
      handleChangeActiveProfileUser,
    };
  };

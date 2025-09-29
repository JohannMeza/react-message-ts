import { useEvent } from '@cobuildlab/react-simple-state';
import { ActiveProfileUserEnum } from './messaging-types';
import { activeProfileUserViewEvent } from './messaging-events';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, UseFormProps, UseFormReturn } from 'react-hook-form';
import { formMessagingSend } from './messaging-validators';

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

export const useFormMessagingSend = (props?: UseFormProps<{ message: string }>): UseFormReturn<{ message: string }> => useForm<{ message: string }>({
  resolver: yupResolver(formMessagingSend, { abortEarly: false }),
  ...props
});

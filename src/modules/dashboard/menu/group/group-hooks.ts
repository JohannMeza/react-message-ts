import { useEvent } from '@cobuildlab/react-simple-state';
import { groupCurrentViewEvent } from './group-events';
import { GroupCurrentViewEnum } from './group-types';

interface HandleChangeViewType {
  handleChangeGroup: (menuView: GroupCurrentViewEnum, isOpen: boolean) => void 
  currentView: GroupCurrentViewEnum
  position: string
}

export const useHandleChangeGroupView = (): HandleChangeViewType => {
  const currentView = useEvent(groupCurrentViewEvent);

  const handleChangeGroup = (menuView: GroupCurrentViewEnum, isOpen: boolean): void => {
    groupCurrentViewEvent.dispatch({ view: currentView.view, position: isOpen ? '0%' : '-100%' });
    setTimeout(() => groupCurrentViewEvent.dispatch({ view: menuView, position: '0%' }), 200);
  };
  
  return {
    currentView: currentView.view,
    position: currentView.position,
    handleChangeGroup
  };
};
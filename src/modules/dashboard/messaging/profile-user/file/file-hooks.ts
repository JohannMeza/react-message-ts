import { useEvent } from '@cobuildlab/react-simple-state';
import { FileCurrentViewEnum } from './file-types';
import { fileCurrentViewEvent } from './file-events';

interface HandleChangeFileType {
  handleChangeFile: (menuView: FileCurrentViewEnum) => void;
  currentView: FileCurrentViewEnum;
}

export const useHandleChangeFileView = (): HandleChangeFileType => {
  const currentView = useEvent(fileCurrentViewEvent);
  const handleChangeFile = (menuView: FileCurrentViewEnum): void =>
    fileCurrentViewEvent.dispatch(menuView);

  return {
    currentView: currentView,
    handleChangeFile,
  };
};

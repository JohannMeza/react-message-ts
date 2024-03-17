import { useEvent } from '@cobuildlab/react-simple-state';
import { picturesViewerEvent } from './pictures-viewer-events';

interface HandleActivePicturesViewer {
  isActive: boolean;
  handleChangeImageViewer: (props: boolean) => void;
}

export const useHandleActivePicturesViewer = (): HandleActivePicturesViewer => {
  const picturesViewer = useEvent(picturesViewerEvent);

  const handleChangeImageViewer = (stateViewer: boolean): void => {
    picturesViewerEvent.dispatch({ active: stateViewer });
  };

  return {
    isActive: picturesViewer.active,
    handleChangeImageViewer,
  };
};

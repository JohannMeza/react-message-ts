import { createEvent } from '@cobuildlab/react-simple-state';
import { SnackbarTypeEvent } from './snackbar-types';

export const snackbarEvent = createEvent<SnackbarTypeEvent>({
  initialValue: {
    message: '',
    type: 'success',
    title: '',
  },
  reducer: (event) => ({
    id: Date.now(),
    ...event,
  }),
});

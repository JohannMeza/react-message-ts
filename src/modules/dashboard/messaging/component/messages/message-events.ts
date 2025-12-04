import { createEvent } from '@cobuildlab/react-simple-state';

interface MessageEditProps {
  idMessage: number
  batchMessage: string
  message: string
}

export const messageEditEvent = createEvent<MessageEditProps>();